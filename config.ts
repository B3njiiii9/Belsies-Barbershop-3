import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC7xsRqxCq7pT-UQjSflIQVPaxMuZ2WOgM",
  authDomain: "belsies-barbershop.firebaseapp.com",
  projectId: "belsies-barbershop",
  storageBucket: "belsies-barbershop.firebasestorage.app",
  messagingSenderId: "1035997570502",
  appId: "1:1035997570502:web:34e42ae456262a16663ec7",
  measurementId: "G-Q91BP66P95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);