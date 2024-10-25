// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH7Z3JTZ8Ja7kDkh_Gt0SFk5A4GCFMWe8",
  authDomain: "ai-travel-16e16.firebaseapp.com",
  projectId: "ai-travel-16e16",
  storageBucket: "ai-travel-16e16.appspot.com",
  messagingSenderId: "936061703416",
  appId: "1:936061703416:web:83dc03eb945ad11bd3570d",
  measurementId: "G-M30GXZXVL7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
