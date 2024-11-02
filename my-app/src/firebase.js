// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "cfg2024team11.firebaseapp.com",
  projectId: "cfg2024team11",
  storageBucket: "cfg2024team11.firebasestorage.app",
  messagingSenderId: "530702024666",
  appId: "1:530702024666:web:489806cb13b81897e34ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dB = getFirestore(app);
