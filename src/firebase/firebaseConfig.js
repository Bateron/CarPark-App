// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp5hZ_soJeYRGuaYz4NHwBpJthG8pVvIM",
  authDomain: "carparkapp-3f248.firebaseapp.com",
  projectId: "carparkapp-3f248",
  storageBucket: "carparkapp-3f248.firebasestorage.app",
  messagingSenderId: "292035640762",
  appId: "1:292035640762:web:8d324741f47480c7a03183",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);