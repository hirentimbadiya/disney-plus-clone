import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAE825DOBXhNXFh6Xli2X8Z1PG5MQ3TBuQ",
    authDomain: "disney-plus-clone-33c6c.firebaseapp.com",
    projectId: "disney-plus-clone-33c6c",
    storageBucket: "disney-plus-clone-33c6c.appspot.com",
    messagingSenderId: "1009691201260",
    appId: "1:1009691201260:web:e341eb3daddb97fde3dfc9",
    measurementId: "G-4820G4VJZV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;