// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8pbqccARf7av0k5AWyj6dMsYR4zt_jF4",
  authDomain: "instagram-8b766.firebaseapp.com",
  projectId: "instagram-8b766",
  storageBucket: "instagram-8b766.appspot.com",
  messagingSenderId: "570805905356",
  appId: "1:570805905356:web:d7d102b1fd4fe3f61bdf69",
  measurementId: "G-2JG2PHKZF3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
