// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxod48DiEhbEV5EjYCm1ujRgcGoDb6gw",
  authDomain: "personal-website-5eba3.firebaseapp.com",
  projectId: "personal-website-5eba3",
  storageBucket: "personal-website-5eba3.firebasestorage.app",
  messagingSenderId: "108793407438",
  appId: "1:108793407438:web:ee22500adc8feb7ba16d9f",
  measurementId: "G-16LJXCHH70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// tracking.js - tracking code for visitor data
document.addEventListener("DOMContentLoaded", async () => {
    const visitorData = {
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };

    try {
        await db.collection("visitors").add(visitorData);
        console.log("Visitor data logged:", visitorData);
    } catch (error) {
        console.error("Error logging visitor data:", error);
    }
});