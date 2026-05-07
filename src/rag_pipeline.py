import os
import json
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

model = SentenceTransformer("all-MiniLM-L6-v2")

index = faiss.read_index("models/faiss_index.bin")

with open("models/chunks.json", "r", encoding="utf-8") as f:
    chunks = json.load(f)

client = OpenAI(
    base_url=os.getenv("NVIDIA_BASE_URL"),
    api_key=os.getenv("NVIDIA_API_KEY")
)


knowledge_graph = {
    "stack": ["lifo", "push", "pop"],
    "queue": ["fifo", "bfs"],
    "tree": ["binary tree", "bst"],
    "graph": ["dfs", "bfs"]
}


def retrieve(query, k=5):
    for key in knowledge_graph:
        if key in query.lower():
            query += " " + " ".join(knowledge_graph[key])

    emb = model.encode([query])
    emb = np.array(emb).astype("float32")

    _, idx = index.search(emb, k)

    return [chunks[i] for i in idx[0] if i < len(chunks)]


def build_context(results):
    context = "\n\n".join([r["text"] for r in results])
    topics = list(set([r["topic"] for r in results]))
    pages = list(set([r["page_number"] for r in results]))
    return context, topics, pages


def build_prompt(q, context):
    return f"""
You are a Data Structures and Algorithms expert.

Understand the user's query and respond accordingly.

If the query is a concept (like "stack", "binary tree", etc.), provide:
- Definition
- Explanation
- Example
- Time & Space Complexity (if applicable)
- Use Cases (if applicable)

If the query is specific (like "difference between BFS and DFS"), answer accordingly.

Use ONLY the provided context.
Do not hallucinate.

Context:
{context}

Question:
{q}

Answer:
"""

def generate_answer(prompt):
    response = client.chat.completions.create(
        model="meta/llama-3.1-70b-instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
        max_tokens=400
    )

    return response.choices[0].message.content.strip()


def answer_question(q):
    q = q.strip().lower()

    # Allow single-word concepts like "graph", "stack"
    if not q:
        return "Please ask a DSA question.", "", [], []

    results = retrieve(q)

    if not results:
        return "Not found in the provided textbook.", "", [], []

    context, topics, pages = build_context(results)

    prompt = build_prompt(q, context)
    ans = generate_answer(prompt)

    return ans, context, topics, pages