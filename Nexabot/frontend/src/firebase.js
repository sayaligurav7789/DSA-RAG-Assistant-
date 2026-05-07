import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXeiODemLV7GYmSnDs7woL-6uA0IU0Zpo",
  authDomain: "nexabot-f59a1.firebaseapp.com",
  projectId: "nexabot-f59a1",
  storageBucket: "nexabot-f59a1.firebasestorage.app",
  messagingSenderId: "935237187058",
  appId: "1:935237187058:web:e1d8db447642c5ce04276b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// ✅ ADD THESE (THIS IS YOUR FIX)
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();



