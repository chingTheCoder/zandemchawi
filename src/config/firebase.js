// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJV3OS1py1Zh7hy77-eWPF9A6k0fJn_0",
  authDomain: "zandemchawi-efee5.firebaseapp.com",
  projectId: "zandemchawi-efee5",
  storageBucket: "zandemchawi-efee5.appspot.com",
  messagingSenderId: "608506297187",
  appId: "1:608506297187:web:1f5b7da67c6287771a3156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {  db }