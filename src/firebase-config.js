// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnZ1mDZloKnSs9xjPTQ5xcKFb1KnQuS_I",
  authDomain: "mychatroom-f6bb0.firebaseapp.com",
  projectId: "mychatroom-f6bb0",
  storageBucket: "mychatroom-f6bb0.appspot.com",
  messagingSenderId: "986044519014",
  appId: "1:986044519014:web:14e1f3f662cff2640b93a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);