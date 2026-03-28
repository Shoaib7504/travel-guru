// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiG37lq8ldjEcEO9fZ7OcZqS0G1yB3S54",
    authDomain: "travel-guru-bf366.firebaseapp.com",
    projectId: "travel-guru-bf366",
    storageBucket: "travel-guru-bf366.firebasestorage.app",
    messagingSenderId: "797142293996",
    appId: "1:797142293996:web:6d994050fd0615f25174c9",
    measurementId: "G-H0Y3MELYWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;