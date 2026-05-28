// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHUYSOWhnU9mckXF-R6tdWUR1OMWBfGSY",
  authDomain: "zerodha-clone-7e63b.firebaseapp.com",
  projectId: "zerodha-clone-7e63b",
  storageBucket: "zerodha-clone-7e63b.firebasestorage.app",
  messagingSenderId: "514785875792",
  appId: "1:514785875792:web:ad34f11228fd9c3c15fe55",
  measurementId: "G-BS5J0GH6XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth =
  getAuth(app);

export const provider =
  new GoogleAuthProvider();