// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLrVwmFC7JBO4X1Ic1B1NZUzdbpme0ObM",
  authDomain: "fire-contact-base-project.firebaseapp.com",
  databaseURL: "https://fire-contact-base-project-default-rtdb.firebaseio.com",
  projectId: "fire-contact-base-project",
  storageBucket: "fire-contact-base-project.appspot.com",
  messagingSenderId: "805121415965",
  appId: "1:805121415965:web:926e1a4a2eab9d82d95ff4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

