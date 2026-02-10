// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDssT8eSZlIWfoSQuvsdKyCx4bbdeuezQ0",
  authDomain: "the-social-connect-afcfta.firebaseapp.com",
  projectId: "the-social-connect-afcfta",
  storageBucket: "the-social-connect-afcfta.firebasestorage.app",
  messagingSenderId: "546637385036",
  appId: "1:546637385036:web:e55a262edce0a57a8ed3e9",
  measurementId: "G-LMV2ZCE5PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
