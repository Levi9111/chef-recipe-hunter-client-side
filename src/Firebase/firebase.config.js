// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClf7yFdf0V3MX64Rg6IfQ9bVy4j6evmak",
  authDomain: "eatery-italiano.firebaseapp.com",
  projectId: "eatery-italiano",
  storageBucket: "eatery-italiano.appspot.com",
  messagingSenderId: "320282076263",
  appId: "1:320282076263:web:6e70853a6d11a33ffbe0c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;