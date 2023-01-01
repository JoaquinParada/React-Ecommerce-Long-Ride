// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8wCbSV6khn_nT4kUWJN8R_YRkSv304PE",
//   authDomain: "long-ride-85382.firebaseapp.com",
//   projectId: "long-ride-85382",
//   storageBucket: "long-ride-85382.appspot.com",
//   messagingSenderId: "349567107395",
//   appId: "1:349567107395:web:9a8945221bc8f160846ff6",
//   measurementId: "G-34FWKMR3R6",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
