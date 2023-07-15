import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_APP_KEY,
    authDomain: "planner-to-do.firebaseapp.com",
    projectId: "planner-to-do",
    storageBucket: "planner-to-do.appspot.com",
    messagingSenderId: "722211427796",
    appId: "1:722211427796:web:f7669764e1361310843241",
    measurementId: "G-TY4Q2CHG44"
  };

  const app = initializeApp(firebaseConfig);
  export const  db = getFirestore(app)
  export const auth = getAuth(app);