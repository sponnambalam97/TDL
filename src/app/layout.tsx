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
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}>
        <Nav />
        <div className="pt-16 min-h-[calc(100vh-200px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
