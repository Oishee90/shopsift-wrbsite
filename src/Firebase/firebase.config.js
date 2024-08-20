// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqyHQM_Xrl2LRKidHo6RxSdSZpSy3vqpQ",
  authDomain: "shopsift-website.firebaseapp.com",
  projectId: "shopsift-website",
  storageBucket: "shopsift-website.appspot.com",
  messagingSenderId: "664415361761",
  appId: "1:664415361761:web:2c84263c923fbd84ce35a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth