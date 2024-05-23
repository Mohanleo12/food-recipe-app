import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-33b3a.firebaseapp.com",
  projectId: "chat-33b3a",
  storageBucket: "chat-33b3a.appspot.com",
  messagingSenderId: "149258939402",
  appId: "1:149258939402:web:12b30b9f6530341f2a03f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
