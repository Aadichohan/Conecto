// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCHYNMtG9kuuKVyX4xzAZ8mA5nScy3-lk4",
  authDomain: "conecto-aa5be.firebaseapp.com",
  projectId: "conecto-aa5be",
  storageBucket: "conecto-aa5be.appspot.com",
  messagingSenderId: "983894290312",
  appId: "1:983894290312:web:409439674765c3e2d9d43d",
  measurementId: "G-BFB010VK0D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);