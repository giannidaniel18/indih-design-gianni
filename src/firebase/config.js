// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7LF-gBM26PTO002taqhZD3h4oghyNPz4",
  authDomain: "indih-design.firebaseapp.com",
  projectId: "indih-design",
  storageBucket: "indih-design.appspot.com",
  messagingSenderId: "382140094286",
  appId: "1:382140094286:web:c87a7dedd1ea1414a2b01f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}