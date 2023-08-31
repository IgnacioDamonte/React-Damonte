
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3C_1TNcMEhkJD7ho_52H1eHVxO23h8Pc",
    authDomain: "barsovia-web.firebaseapp.com",
    projectId: "barsovia-web",
    storageBucket: "barsovia-web.appspot.com",
    messagingSenderId: "386428056039",
    appId: "1:386428056039:web:81c2f3e2fbcc1438324d42"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)