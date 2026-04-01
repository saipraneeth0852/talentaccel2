import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const jobs = [
  {
    title: "Lead Data Scientist – Industrial AI / Machine Health",
    dept: "Data Science",
    location: "Noida",
    type: "Full-time",
    order: 0,
  },
  {
    title: "HR Business Partners (Multiple Levels)",
    dept: "Human Resources",
    location: "Electronics City, Bengaluru",
    type: "Full-time",
    order: 1,
  },
];

export default function SeedJobs() {
  const [status, setStatus] = useState("Seeding...");

  useEffect(() => {
    async function seed() {
      try {
        const snap = await getDocs(collection(db, "careers"));
        for (const d of snap.docs) {
          await deleteDoc(doc(db, "careers", d.id));
        }
        for (const job of jobs) {
          await addDoc(collection(db, "careers"), { ...job, createdAt: serverTimestamp() });
        }
        setStatus("Done! Seeded " + jobs.length + " jobs.");
      } catch (e: any) {
        setStatus("Error: " + e.message);
      }
    }
    seed();
  }, []);

  return <div id="status-container">{status}</div>;
}
