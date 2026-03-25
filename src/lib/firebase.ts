import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaIT-pzctt11F5xAACTIhYgAs21BTDjoY",
  authDomain: "talentaccel.firebaseapp.com",
  projectId: "talentaccel",
  storageBucket: "talentaccel.firebasestorage.app",
  messagingSenderId: "944597841037",
  appId: "1:944597841037:web:f538af3eb15d28bee5dec4",
  measurementId: "G-YD1NW724BW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
