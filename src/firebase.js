
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2KEseFyr9q8mMlJRUGQfeP33DPRYFu9A",
  authDomain: "dev-deakin-p4-10bb0.firebaseapp.com",
  projectId: "dev-deakin-p4-10bb0",
  storageBucket: "dev-deakin-p4-10bb0.firebasestorage.app",
  messagingSenderId: "680179710895",
  appId: "1:680179710895:web:28a290cbd6595aeff44d5a",
  measurementId: "G-BQ4K5T7XCX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
