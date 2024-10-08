// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAHIO-YzVbQgEC2YkW-XFZy7WHkN5ygw_4",
  authDomain: "tasktap-e05bc.firebaseapp.com",
  projectId: "tasktap-e05bc",
  storageBucket: "tasktap-e05bc.appspot.com",
  messagingSenderId: "817425841739",
  appId: "1:817425841739:web:107acb02b6334f732797ce",
  //databaseURL: "https://tasktap-e05bc-default-rtdb.firebaseio.com/"
  databaseURL: "https://tasktap-e05bc-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export default app;
export const firestore = getFirestore(app);