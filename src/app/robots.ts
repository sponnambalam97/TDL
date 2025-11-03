import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://tdlnew.vercel.app";
  return {
    rules: [{ userAgent: "*" }],
    sitemap: `${base}/sitemap.xml`,
  };
}


