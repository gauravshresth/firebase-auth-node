// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjM3vHxCp4BxjCu5461iZ9aZ8adNU7Ii8",
  authDomain: "fir-auth-node-31314.firebaseapp.com",
  projectId: "fir-auth-node-31314",
  storageBucket: "fir-auth-node-31314.appspot.com",
  messagingSenderId: "127502999456",
  appId: "1:127502999456:web:5c0fa5159bed4a34d5cec5",
  measurementId: "G-WNRBJLR6X7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
