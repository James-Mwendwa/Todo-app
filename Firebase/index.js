import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy4WmcMVj38Yex_pEQ8yYsOGMF9Z5oyFs",
  authDomain: "todo-app-e0d21.firebaseapp.com",
  projectId: "todo-app-e0d21",
  storageBucket: "todo-app-e0d21.appspot.com",
  messagingSenderId: "188416833871",
  appId: "1:188416833871:web:389379746bd07d9d696d3a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
