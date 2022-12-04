import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv87QlNn63rcCc4W9_i3LaeBtqmoxCTcQ",
  authDomain: "finbuddummy.firebaseapp.com",
  projectId: "finbuddummy",
  storageBucket: "finbuddummy.appspot.com",
  messagingSenderId: "630446817953",
  appId: "1:630446817953:web:a667f510b9b2ed84cba6e0",
  measurementId: "G-G6H2YYF33H"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export default auth;
export { db };
