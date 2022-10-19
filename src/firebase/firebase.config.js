// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh74z3Jq--MK3V_a65CUKhPqmqPJdMZR4",
    authDomain: "simple-auth-with-context.firebaseapp.com",
    projectId: "simple-auth-with-context",
    storageBucket: "simple-auth-with-context.appspot.com",
    messagingSenderId: "914053756495",
    appId: "1:914053756495:web:dc4b271020059805a45c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;