import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// High-end sans-serif font for standard text and headings
const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

// Technical monospace font for labels, metrics, and code
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "TechyFusion | Techy Fusion - Web Development, AI Solutions & Software Company",
  description:
    "TechyFusion (Techy Fusion) is a software development company providing Web Development, Mobile App Development, AI Solutions, Cloud Services, Custom Software Development, and Digital Marketing services.",
  icons: {
    icon: "/techy_fusion_logo-removebg-preview%20(1).png",
    shortcut: "/techy_fusion_logo-removebg-preview%20(1).png",
    apple: "/techy_fusion_logo-removebg-preview%20(1).png",
  },
  keywords: [
    "tech solutions",
    "web development",
    "mobile apps",
    "AI automation",
    "custom software",
    "cloud services",
    "digital marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Force dark mode context and load font variables
      className={`${geistSans.variable} ${jetBrainsMono.variable} h-full scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface font-sans antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}