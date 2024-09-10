// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrXxijRdrg5dPUmMIfD2lpJSRjpH1pmzI",
  authDomain: "vintage-vault-11f3e.firebaseapp.com",
  projectId: "vintage-vault-11f3e",
  storageBucket: "vintage-vault-11f3e.appspot.com",
  messagingSenderId: "699751902270",
  appId: "1:699751902270:web:86020c5d68b7335fcbf56f",
  measurementId: "G-ZCDZJJQNSJ",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); // To avoid double initialization
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
