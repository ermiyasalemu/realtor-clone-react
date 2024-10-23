// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeugJnF-BkhNBohnSWhd7wxuQDzBwXf4s",
  authDomain: "realtor-react-clone-b3015.firebaseapp.com",
  projectId: "realtor-react-clone-b3015",
  storageBucket: "realtor-react-clone-b3015.appspot.com",
  messagingSenderId: "48922457812",
  appId: "1:48922457812:web:ccf5fb10be2960037f2d41"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db  = getFirestore()
