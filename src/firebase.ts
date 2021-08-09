import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAiqutrLBRqvVshgM4aK96VZHBpTSXTsyw",
  authDomain: "epic-market666.firebaseapp.com",
  projectId: "epic-market666",
  storageBucket: "epic-market666.appspot.com",
  messagingSenderId: "189787608344",
  appId: "1:189787608344:web:ff7d58389d9737b50b3a6d",
};
// Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
