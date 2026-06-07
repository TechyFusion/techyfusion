import type { Metadata } from "next";
import { DM_Sans, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "TechyFusion | Techy Fusion - Web Development, AI Solutions & Software Company",
  description:
    "TechyFusion (Techy Fusion) is a software development company providing Web Development, Mobile App Development, AI Solutions, Cloud Services, Custom Software Development, and Digital Marketing services.",
  icons: {
    icon: "/TechyFusion_Updated_Logo-removebg-DARK.png",
    shortcut: "/TechyFusion_Updated_Logo-removebg-DARK.png",
    apple: "/TechyFusion_Updated_Logo-removebg-DARK.png",
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
      className={`${dmSans.variable} ${ebGaramond.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-[family-name:var(--font-body)]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
