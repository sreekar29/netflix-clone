// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASVZMCfkajvDiibflItHbft0W0rnjoJIw",
  authDomain: "netflix-c4bf2.firebaseapp.com",
  projectId: "netflix-c4bf2",
  storageBucket: "netflix-c4bf2.firebasestorage.app",
  messagingSenderId: "327672958198",
  appId: "1:327672958198:web:de17ba0e09ee7c39eab0d7",
  measurementId: "G-ZTL32X12ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);