import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBSkXQl71MQgI6PB1rJdozNcCO8obmKOFg",
  authDomain: "react-crud-65dcf.firebaseapp.com",
  projectId: "react-crud-65dcf",
  storageBucket: "react-crud-65dcf.appspot.com",
  messagingSenderId: "842303864865",
  appId: "1:842303864865:web:a0edfd01ea15beb497e360"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);