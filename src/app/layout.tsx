import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Three Dots Learning",
    template: "%s | Three Dots Learning",
  },
  description:
    "A modern, interactive learning platform for ages 6–18 with expert tutors.",
  metadataBase: new URL("https://tdlnew.vercel.app"),
  openGraph: {
    title: "Three Dots Learning",
    description:
      "Personalised small-group learning, expert tutors, interactive content, and measurable progress.",
    url: "https://tdlnew.vercel.app",
    siteName: "Three Dots Learning",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596495578065-8fe3faad6627?w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Three Dots Learning",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow">Skip to content</a>
        <Nav />
        <div id="main" className="pt-16 min-h-[calc(100vh-200px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
