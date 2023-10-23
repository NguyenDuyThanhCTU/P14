import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVOKUpPUYVy42hK8TGVSkxVVHf71OCDQg",

  authDomain: "khoacuatudong-aae13.firebaseapp.com",

  projectId: "khoacuatudong-aae13",

  storageBucket: "khoacuatudong-aae13.appspot.com",

  messagingSenderId: "806898886815",

  appId: "1:806898886815:web:1d8fa49639a67b47e89aaa",

  measurementId: "G-BZLCBGXYPK",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const db = getFirestore(app);

export const auth = getAuth(app);
