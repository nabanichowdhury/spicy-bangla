// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfXV08KtHtvxtBb9nW4U3oAMQTVEJBu6E",
  authDomain: "spicy-bangla.firebaseapp.com",
  projectId: "spicy-bangla",
  storageBucket: "spicy-bangla.appspot.com",
  messagingSenderId: "58549797953",
  appId: "1:58549797953:web:7e1e42a0be0b17e6f332c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth