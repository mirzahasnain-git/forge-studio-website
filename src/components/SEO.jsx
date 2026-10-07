import { useEffect } from "react";

const siteName = "Forge Studio";
const defaultTitle = "Forge Studio — Web Development & Video Editing";
const defaultDescription =
  "Forge Studio builds modern websites, React web applications, and engaging video content for businesses and creators.";

const pageMeta = {
  "/": { title: defaultTitle, description: defaultDescription },
  "/services": {
    title: "Web Development & Video Editing Services | Forge Studio",
    description: "Explore Forge Studio services for business websites, landing pages, React web applications, YouTube editing, Shorts, Reels, and video ads.",
  },
  "/portfolio": {
    title: "Web Development & Video Editing Portfolio | Forge Studio",
    description: "View Forge Studio web projects, React applications, YouTube edits, podcast editing, and short-form video work.",
  },
  "/about": {
    title: "About Forge Studio | Web & Video Creative Studio",
    description: "Learn about Forge Studio, a lean digital studio combining web development and video editing for businesses and creators.",
  },
  "/contact": {
    title: "Contact Forge Studio | Start a Project",
    description: "Tell Forge Studio about your website, web application, YouTube editing, Shorts, Reels, or video project and start a conversation.",
  },
};

function setMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SEO() {
  const pathname = window.location.pathname;
  const meta = pageMeta[pathname] || pageMeta["/"];

  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector('script[data-forge-schema="organization"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.forgeSchema = "organization";
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      email: "mailto:mirzahasnainalam@gmail.com",
      description: defaultDescription,
      logo: `${siteUrl}/favicon.svg`,
      sameAs: [],
    });
  }, [meta.title, meta.description, pathname]);

  return null;
}
