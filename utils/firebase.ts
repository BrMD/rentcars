// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1_8Hy9ZWAe1Xf8GEK_m9Ror2sYyZG_Sc",
  authDomain: "rentcars-1c951.firebaseapp.com",
  projectId: "rentcars-1c951",
  storageBucket: "rentcars-1c951.appspot.com",
  messagingSenderId: "189955697562",
  appId: "1:189955697562:web:54457fd2ea71814634a823",
  measurementId: "G-BGDEM8E5VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
