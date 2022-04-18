// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEmSkrPrfvDEz2GOjcHXXD-3HLyOgweIc",
    authDomain: "assignment10-49e2b.firebaseapp.com",
    projectId: "assignment10-49e2b",
    storageBucket: "assignment10-49e2b.appspot.com",
    messagingSenderId: "901349496271",
    appId: "1:901349496271:web:002dc227274eba27a6eeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;