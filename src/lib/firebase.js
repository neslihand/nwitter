import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRX40W6aGMR3XnB9xmCGD-6EyHXQzgQbU",
  authDomain: "nwitter-8f158.firebaseapp.com",
  projectId: "nwitter-8f158",
  storageBucket: "nwitter-8f158.appspot.com",
  messagingSenderId: "993612663134",
  appId: "1:993612663134:web:2d41345472fd9a2922a7cf",
  measurementId: "G-TQM9R32P6Q"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
