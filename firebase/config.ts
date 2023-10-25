import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsGGXmLAqZQGcnME-SgeKPWS2ODILVVus",
  authDomain: "vuamuckieunuong.firebaseapp.com",
  projectId: "vuamuckieunuong",
  storageBucket: "vuamuckieunuong.appspot.com",
  messagingSenderId: "500465902609",
  appId: "1:500465902609:web:6d24bff3b07effa644bdb0",
  measurementId: "G-9FMLG8VJMD",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
export default firebase;
