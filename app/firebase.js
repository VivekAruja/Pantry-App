import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBw0rBXeI6VJVaIbJVveDFh3K48Kc7WVso',
  authDomain: 'hspantryapp-73642.firebaseapp.com',
  projectId: 'hspantryapp-73642',
  storageBucket: 'hspantryapp-73642',
  messagingSenderId: '283237454835',
  appId: '1:283237454835:web:b312fdc3c1f97c5bb67886',
  measurementId: 'G-6LSKT1R6FP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, collection, query, getDocs, doc, setDoc, deleteDoc, getDoc };



