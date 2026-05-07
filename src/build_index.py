import os
import json
import re
import fitz
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

PDF_PATH = "data/Data-Structures-and-Algorithms-Narasimha-Karumanchi.pdf"
MODEL_DIR = "models"
os.makedirs(MODEL_DIR, exist_ok=True)

model = SentenceTransformer("all-MiniLM-L6-v2")


def extract_pdf_text(pdf_path):
    doc = fitz.open(pdf_path)
    pages = []

    for i in range(len(doc)):
        pages.append({
            "page_number": i + 1,
            "text": doc[i].get_text()
        })

    return pages


def detect_topic(text):
    text = text.lower()
    if "stack" in text: return "Stack"
    if "queue" in text: return "Queue"
    if "tree" in text: return "Tree"
    if "graph" in text: return "Graph"
    if "sort" in text: return "Sorting"
    if "search" in text: return "Searching"
    return "General"


def chunk_text(pages):
    chunks = []
    chunk_id = 0

    for page in pages:
        text = page["text"].replace("\n", " ")

        qa_pairs = re.split(r'(?:Q\.|Question)', text, flags=re.IGNORECASE)

        for qa in qa_pairs:
            parts = re.split(r'(?:Ans:|Answer:)', qa, flags=re.IGNORECASE)

            if len(parts) < 2:
                continue

            q = parts[0].strip()
            a = parts[1].strip()

            if len(a) < 50:
                continue

            chunks.append({
                "chunk_id": chunk_id,
                "question": q,
                "answer": a,
                "text": f"Question: {q}\nAnswer: {a}",
                "topic": detect_topic(a),
                "page_number": page["page_number"]
            })

            chunk_id += 1

    print("Total chunks:", len(chunks))
    return chunks


def build_index(chunks):
    texts = [c["question"] for c in chunks]

    embeddings = model.encode(texts)
    embeddings = np.array(embeddings).astype("float32")

    index = faiss.IndexFlatL2(embeddings.shape[1])
    index.add(embeddings)

    faiss.write_index(index, "models/faiss_index.bin")

    with open("models/chunks.json", "w", encoding="utf-8") as f:
        json.dump(chunks, f, indent=2, ensure_ascii=False)

    print("Index built successfully!")


if __name__ == "__main__":
    pages = extract_pdf_text(PDF_PATH)
    chunks = chunk_text(pages)
    build_index(chunks)