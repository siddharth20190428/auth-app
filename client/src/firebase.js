// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-24.firebaseapp.com",
  projectId: "auth-mern-24",
  storageBucket: "auth-mern-24.appspot.com",
  messagingSenderId: "591057508454",
  appId: "1:591057508454:web:61eba82718450a0ed3b5a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
