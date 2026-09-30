// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4RKU4IyDdEKd2qoRXuWJKrKgd5YhqaM",
  authDomain: "falafel-store.firebaseapp.com",
  projectId: "falafel-store",
  storageBucket: "falafel-store.firebasestorage.app",
  messagingSenderId: "980570704935",
  appId: "1:980570704935:web:cf5ebee5ee4ec1a7ee9202",
  measurementId: "G-GD0VCDEZBQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
