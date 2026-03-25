import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface AppService {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: string;
  order: number;
}

export interface AppIndustry {
  id: string;
  label: string;
  icon: string;
  order: number;
}

export interface AppCaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  imageUrl: string;
  order: number;
}

export interface AppBlog {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  readTime: string;
  imageUrl: string;
  order: number;
}

interface AppData {
  services: AppService[];
  industries: AppIndustry[];
  caseStudies: AppCaseStudy[];
  blogs: AppBlog[];
}

// Fetches all 4 collections in parallel — exactly 4 Firestore reads per session
const fetchAppData = async (): Promise<AppData> => {
  const safeQuery = async <T>(col: string): Promise<T[]> => {
    try {
      const snap = await getDocs(query(collection(db, col), orderBy("order", "asc")));
      return snap.docs.map((d) => ({ id: d.id, ...d.data() } as T));
    } catch {
      // If index not ready or empty collection, fall back to unordered fetch
      try {
        const snap = await getDocs(collection(db, col));
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as T));
      } catch {
        return [];
      }
    }
  };

  const [services, industries, caseStudies, blogs] = await Promise.all([
    safeQuery<AppService>("services"),
    safeQuery<AppIndustry>("industries"),
    safeQuery<AppCaseStudy>("caseStudies"),
    safeQuery<AppBlog>("blogs"),
  ]);

  return { services, industries, caseStudies, blogs };
};

export const useAppData = () =>
  useQuery<AppData>({
    queryKey: ["appData"],
    queryFn: fetchAppData,
    staleTime: Infinity,   // Never refetch automatically
    gcTime: 1000 * 60 * 60, // Keep in memory for 1 hour
    retry: 1,
  });
