// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOQrE_5XWUfve-g9qO4SiBCgXaXmiHI8w",
  authDomain: "rushlearn-679a1.firebaseapp.com",
  projectId: "rushlearn-679a1",
  storageBucket: "rushlearn-679a1.appspot.com",
  messagingSenderId: "183514476555",
  appId: "1:183514476555:web:8d25684f571f66d6f1170e",
  measurementId: "G-7P7HKTHSP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebaseConfig, app, analytics};