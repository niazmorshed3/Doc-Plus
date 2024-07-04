// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ExINclOw0Nf7jkorR8WyqvHE39T2NcU",
  authDomain: "doc-p-586d3.firebaseapp.com",
  projectId: "doc-p-586d3",
  storageBucket: "doc-p-586d3.appspot.com",
  messagingSenderId: "277717238847",
  appId: "1:277717238847:web:1b2680a7055211e4b5248a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
