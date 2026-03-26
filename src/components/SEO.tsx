import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: "website" | "article" | "profile";
  image?: string;
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
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `${baseUrl}${location.pathname}`;
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Basic Meta
    document.title = fullTitle;
    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:site_name", siteName);

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // Canonical
    setCanonicalUrl(currentUrl);
  }, [fullTitle, description, keywords, type, image, currentUrl]);

  return null;
};

// Helper function to update or create meta tags
function setMetaTag(attrName: "name" | "property", attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    // As per user request: "should be on the top" - We prepend the dynamically created tags
    // high up in the head to prioritize SEO crawler visibility
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

// Helper function for Canonical Canonical Link
function setCanonicalUrl(url: string) {
  let element = document.querySelector(`link[rel="canonical"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}
