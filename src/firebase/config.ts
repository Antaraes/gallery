// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3_SNAXWBa0SrcvcvX-m8bb6VykBjZkfo",
  authDomain: "image-gallery-5692a.firebaseapp.com",
  projectId: "image-gallery-5692a",
  storageBucket: "image-gallery-5692a.appspot.com",
  messagingSenderId: "1074868468377",
  appId: "1:1074868468377:web:04024fd7b33791d7fc5608",
  measurementId: "G-09QE9B4D5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore();
export { auth, storage, db };
