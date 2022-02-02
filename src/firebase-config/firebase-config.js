import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAWta1oke2LSI28B7jmFd8Q1AqlDozK59k",
  authDomain: "note-app-57eed.firebaseapp.com",
  projectId: "note-app-57eed",
  storageBucket: "note-app-57eed.appspot.com",
  messagingSenderId: "678023697832",
  appId: "1:678023697832:web:e9d57a71b06b28ab67b99d",
  measurementId: "G-QT9YSQ5DSV"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);