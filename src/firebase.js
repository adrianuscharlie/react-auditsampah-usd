// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdUfFCFTWg8EsRq4oMhgcQdjW_E5hpesc",
  authDomain: "fchsampah.firebaseapp.com",
  projectId: "fchsampah",
  storageBucket: "fchsampah.appspot.com",
  messagingSenderId: "672194706513",
  appId: "1:672194706513:web:c2ae19a4f3c7adc89d8c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);