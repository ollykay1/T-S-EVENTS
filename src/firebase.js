// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config (yours is correct)
const firebaseConfig = {
  apiKey: "AIzaSyBJfOU-Go8pO6lrAB7Z3JavFYJXzBU8W-c",
  authDomain: "t-s-elite-events.firebaseapp.com",
  projectId: "t-s-elite-events",
  storageBucket: "t-s-elite-events.firebasestorage.app",
  messagingSenderId: "875538425130",
  appId: "1:875538425130:web:a93690fd95e53d1c35aa53",
  measurementId: "G-Z8DHMCCMYE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore (this is what you need)
export const db = getFirestore(app);
