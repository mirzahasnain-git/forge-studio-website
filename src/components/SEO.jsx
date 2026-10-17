import { useEffect } from "react";

const siteName = "V-Graph Studio";
const defaultTitle = "V-Graph Studio — Web Development & Video Editing";
const defaultDescription =
  "V-Graph Studio creates modern websites, web experiences, and engaging video content for businesses, creators, and brands.";

const pageMeta = {
  "/": { title: defaultTitle, description: defaultDescription },
  "/services": {
    title: "Web Development & Video Editing Services | V-Graph Studio",
    description: "Explore V-Graph Studio services for business websites, landing pages, React web applications, YouTube editing, Shorts, Reels, and video ads.",
  },
  "/portfolio": {
    title: "Creative Portfolio | Web Development & Video Editing | V-Graph Studio",
    description: "Explore V-Graph Studio web projects, podcast edits, a cinematic restaurant promotion, and a short-form product advertisement.",
  },
  "/about": {
    title: "About V-Graph Studio | Web & Video Creative Studio",
    description: "Learn about V-Graph Studio, combining web development and video editing for businesses and creators.",
  },
  "/contact": {
    title: "Contact V-Graph Studio | Start a Project",
    description: "Tell V-Graph Studio about your website, web application, YouTube editing, Shorts, Reels, or video project.",
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

    let structuredData = document.head.querySelector('script[data-vgraph-schema="organization"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.vgraphSchema = "organization";
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
