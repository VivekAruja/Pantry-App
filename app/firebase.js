// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw0rBXeI6VJVaIbJVveDFh3K48Kc7WVso",
  authDomain: "hspantryapp-73642.firebaseapp.com",
  projectId: "hspantryapp-73642",
  storageBucket: "hspantryapp-73642.appspot.com",
  messagingSenderId: "283237454835",
  appId: "1:283237454835:web:b312fdc3c1f97c5bb67886",
  measurementId: "G-6LSKT1R6FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore};
