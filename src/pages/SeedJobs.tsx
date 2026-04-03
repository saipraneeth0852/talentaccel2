import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { careerSeedData } from "@/lib/careerSeedData";

const jobs = careerSeedData;

export default function SeedJobs() {
  const [status, setStatus] = useState("Seeding...");

  useEffect(() => {
    async function seed() {
      try {
        const snap = await getDocs(collection(db, "careers"));
        const existing = new Map(
          snap.docs.map((d) => {
            const data = d.data();
            const key = `${String(data.title || "").toLowerCase()}::${String(data.location || "").toLowerCase()}`;
            return [key, d.id];
          })
        );

        for (const job of jobs) {
          const key = `${job.title.toLowerCase()}::${job.location.toLowerCase()}`;
          const payload = { ...job, updatedAt: serverTimestamp() };
          const existingId = existing.get(key);

          if (existingId) {
            await updateDoc(doc(db, "careers", existingId), payload);
          } else {
            await addDoc(collection(db, "careers"), { ...payload, createdAt: serverTimestamp() });
          }
        }
        setStatus("Done! Upserted " + jobs.length + " jobs.");
      } catch (e: any) {
        setStatus("Error: " + e.message);
      }
    }
    seed();
  }, []);

  return <div id="status-container">{status}</div>;
}
