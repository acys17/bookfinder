import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9AuOBBB-w0mFml-Y1uY6wrBN3unOsXSM",
    authDomain: "bookfinder-ac100.firebaseapp.com",
    projectId: "bookfinder-ac100",
    storageBucket: "bookfinder-ac100.appspot.com",
    messagingSenderId: "1050667527733",
    appId: "1:1050667527733:web:d9a80396342123c946cb7c",
    measurementId: "G-XHF6LLL0DN"
};

firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;