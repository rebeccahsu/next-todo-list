import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDT1T7MrZBJAhkpVE4pa9OWLzI3Sd5qMys",
  authDomain: "todo-list-fbf4b.firebaseapp.com",
  projectId: "todo-list-fbf4b",
  storageBucket: "todo-list-fbf4b.appspot.com",
  messagingSenderId: "186092267361",
  appId: "1:186092267361:web:c6440ce21582f407334720",
  measurementId: "G-NYEXYD9207"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
