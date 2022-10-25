// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABehQG0OlEuPiGwvBEhrlrFio0Fa9dosA",
  authDomain: "g-twitter-authentication-task.firebaseapp.com",
  projectId: "g-twitter-authentication-task",
  storageBucket: "g-twitter-authentication-task.appspot.com",
  messagingSenderId: "874183957125",
  appId: "1:874183957125:web:7884babd896dcd1ab067ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
