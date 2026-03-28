import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

const siteName = "TalentAccel";
const baseUrl = "https://talentaccel.com";
const defaultImage = `${baseUrl}/og-image.jpg`;

export const SEO = ({
  title,
  description,
  keywords,
  type = "website",
  image = defaultImage,
  noIndex = false,
  schema,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `${baseUrl}${location.pathname}`;
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Basic Meta
    document.title = fullTitle;
    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:site_name", siteName);
    setMetaTag("property", "og:locale", "en_US");

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // Canonical
    setCanonicalUrl(currentUrl);

    // JSON-LD schema
    if (schema) {
      setJsonLd("page-schema", schema);
    }

    return () => {
      // Clean up page-level schema on unmount
      if (schema) {
        const el = document.getElementById("page-schema");
        if (el) el.remove();
      }
    };
  }, [fullTitle, description, keywords, type, image, currentUrl, noIndex, schema]);

  return null;
};

// Helper function to update or create meta tags
function setMetaTag(attrName: "name" | "property", attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    const head = document.head;
    const firstMeta = head.querySelector("meta");
    if (firstMeta) {
      head.insertBefore(element, firstMeta.nextSibling);
    } else {
      head.appendChild(element);
    }
  }

  element.setAttribute("content", content);
}

// Helper function for Canonical Link
function setCanonicalUrl(url: string) {
  let element = document.querySelector(`link[rel="canonical"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

// Helper function to inject/update a JSON-LD script block
function setJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}
