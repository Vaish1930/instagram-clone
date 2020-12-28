import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAodBOOuI41Dyag6NGae__gOEDJrtMwOdg",
  authDomain: "instagram-clone-6ef00.firebaseapp.com",
  databaseURL: "https://instagram-clone-6ef00.firebaseio.com",
  projectId: "instagram-clone-6ef00",
  storageBucket: "instagram-clone-6ef00.appspot.com",
  messagingSenderId: "736400650568",
  appId: "1:736400650568:web:1bef0545dd62d91b70837d",
  measurementId: "G-7T3MXEHG03",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
