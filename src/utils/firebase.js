// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA09dZ0gU-sboHzwjQ1g9XCTPE0K3KGMQk",
  authDomain: "moviestation-18776.firebaseapp.com",
  projectId: "moviestation-18776",
  storageBucket: "moviestation-18776.firebasestorage.app",
  messagingSenderId: "171084216528",
  appId: "1:171084216528:web:e4cc03063cc2a2bee046d5",
  measurementId: "G-C2LQTKNP80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
