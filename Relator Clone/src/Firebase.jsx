// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDod5RtMrXjPZUonx0NY2vLxW27lIAUfD0",
  authDomain: "relator-clone-react.firebaseapp.com",
  projectId: "relator-clone-react",
  storageBucket: "relator-clone-react.appspot.com",
  messagingSenderId: "812767308305",
  appId: "1:812767308305:web:7a397f58eebde18c051fb0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
