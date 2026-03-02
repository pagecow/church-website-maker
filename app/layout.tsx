import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChurchWebsiteMaker.com — Beautiful, Done-For-You Church Websites",
  description:
    "Get a professional church website with custom domain, logo, Google Maps listing, and ongoing maintenance — all for just $49/month. Built by TJ McCarty with 10+ years of experience.",
  openGraph: {
    title: "ChurchWebsiteMaker.com — Beautiful, Done-For-You Church Websites",
    description:
      "Professional church website design, domain setup, logo creation, and monthly maintenance for $49/month.",
    type: "website",
    url: "https://churchwebsitemaker.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
