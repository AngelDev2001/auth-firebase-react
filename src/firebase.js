// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDADiArQZQNZ9ruEVnHzoq9oDLYzBMLVDk",
    authDomain: "blog-practice-61e90.firebaseapp.com",
    projectId: "blog-practice-61e90",
    storageBucket: "blog-practice-61e90.firebasestorage.app",
    messagingSenderId: "1083151147946",
    appId: "1:1083151147946:web:d57d6c10902c64d76941d3",
    measurementId: "G-3893PN4BLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);