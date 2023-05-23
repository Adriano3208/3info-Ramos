// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX3ea_wjpgcjgMYp13eI4ncwR_nUifXFM",
  authDomain: "info-adriano.firebaseapp.com",
  projectId: "info-adriano",
  storageBucket: "info-adriano.appspot.com",
  messagingSenderId: "630971440622",
  appId: "1:630971440622:web:b13e46417b0ac60090c2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// 20