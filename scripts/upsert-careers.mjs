import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { careerSeedData } from "../src/lib/careerSeedData.js";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.VITE_FIREBASE_APP_ID || "",
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || "",
};

for (const [key, value] of Object.entries(firebaseConfig)) {
  if (!value) {
    throw new Error(`Missing Firebase env var for ${key}`);
  }
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const careersRef = collection(db, "careers");

const snapshot = await getDocs(careersRef);
const existing = new Map(
  snapshot.docs.map((d) => {
    const data = d.data();
    const key = `${String(data.title || "").toLowerCase()}::${String(data.location || "").toLowerCase()}`;
    return [key, d.id];
  }),
);

let created = 0;
let updated = 0;

for (const job of careerSeedData) {
  const key = `${job.title.toLowerCase()}::${job.location.toLowerCase()}`;
  const payload = { ...job, updatedAt: serverTimestamp() };
  const existingId = existing.get(key);

  if (existingId) {
    await updateDoc(doc(db, "careers", existingId), payload);
    updated += 1;
  } else {
    await addDoc(careersRef, { ...payload, createdAt: serverTimestamp() });
    created += 1;
  }
}

console.log(`Careers upsert complete. Created: ${created}, Updated: ${updated}`);
