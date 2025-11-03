import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tdlnew.vercel.app";
  return [
    { url: base + "/", priority: 1.0 },
    { url: base + "/services", priority: 0.8 },
    { url: base + "/faq", priority: 0.7 },
    { url: base + "/contact", priority: 0.6 },
  ];
}


