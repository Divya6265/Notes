import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyA4kDWCvsngAJSouZ-0IzI1ZrtXb892vRo",
    authDomain: "notes-app-feec8.firebaseapp.com",
    projectId: "notes-app-feec8",
    storageBucket: "notes-app-feec8.firebasestorage.app",
    messagingSenderId: "224177964092",
    appId: "1:224177964092:web:f99a4679a703b4fd01af39",
    measurementId: "G-X1NFDXE1KN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export{db};
