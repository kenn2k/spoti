// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJPFT9yVHlhfNsxKqVWuN1jIWVu-MlIXc",
  authDomain: "auth-spotify-4cb9d.firebaseapp.com",
  projectId: "auth-spotify-4cb9d",
  storageBucket: "auth-spotify-4cb9d.appspot.com",
  messagingSenderId: "525652187558",
  appId: "1:525652187558:web:2ac82885c33d442bb29767",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
