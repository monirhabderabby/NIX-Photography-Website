import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwBjGcB_bH4RBvOKnTfWLgXeNar5iMUCg",
  authDomain: "nix-authentication.firebaseapp.com",
  projectId: "nix-authentication",
  storageBucket: "nix-authentication.appspot.com",
  messagingSenderId: "201135375027",
  appId: "1:201135375027:web:1c67347760f7c1d03f26c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;