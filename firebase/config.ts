import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDsGGXmLAqZQGcnME-SgeKPWS2ODILVVus",
//   authDomain: "vuamuckieunuong.firebaseapp.com",
//   projectId: "vuamuckieunuong",
//   storageBucket: "vuamuckieunuong.appspot.com",
//   messagingSenderId: "500465902609",
//   appId: "1:500465902609:web:6d24bff3b07effa644bdb0",
//   measurementId: "G-9FMLG8VJMD",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC6R5vYM_meoPMMEUJpo79353fmWYmwKuY",

  authDomain: "nongsanthuysanthienngoc.firebaseapp.com",

  projectId: "nongsanthuysanthienngoc",

  storageBucket: "nongsanthuysanthienngoc.appspot.com",

  messagingSenderId: "408695325209",

  appId: "1:408695325209:web:01aeaaaf44b92880032088",

  measurementId: "G-S8RW3QL7VD",
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
