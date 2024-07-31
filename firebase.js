// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBe2rpedaoH4D3ZbDbNYLjEWgp6LldkPU",
  authDomain: "pantry-tracker-1d871.firebaseapp.com",
  projectId: "pantry-tracker-1d871",
  storageBucket: "pantry-tracker-1d871.appspot.com",
  messagingSenderId: "843276646352",
  appId: "1:843276646352:web:4841f3bf7283c35c14abd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };