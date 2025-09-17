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
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Rameswaram – Sacred Island, Temples, Dhanushkodi & Travel Guide",
    template: "%s | Rameswaram Tourism"
  },
  description:
    "Discover Rameswaram: Sri Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge, Agni Theertham, Gandhamadhana Parvatham, and Dr. A.P.J. Abdul Kalam Memorial. Plan your trip with highlights, rituals, best season and tips.",
  keywords: [
    "Rameswaram",
    "Ramanathaswamy Temple",
    "Dhanushkodi",
    "Pamban Bridge",
    "Agni Theertham",
    "Gandhamadhana Parvatham",
    "Abdul Kalam Memorial",
    "Tamil Nadu tourism",
    "pilgrimage",
    "places to visit"
  ],
  authors: [{ name: "Rameswaram Tourism" }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Rameswaram – Sacred Island, Temples, Dhanushkodi & Travel Guide",
    description:
      "Plan your Rameswaram trip: temples, beaches, Pamban Bridge, rituals and tips.",
    url: "/",
    siteName: "Rameswaram Tourism",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/places/1.png",
        width: 1200,
        height: 630,
        alt: "Rameswaram – Ramanathaswamy Temple, Dhanushkodi and Pamban Bridge"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rameswaram – Sacred Island & Travel Guide",
    description:
      "Explore Rameswaram: Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge and more.",
    images: ["/places/1.png"],
    creator: "@rameswaram",
    site: "@rameswaram"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/places/1.png", sizes: "192x192", type: "image/png" },
      { url: "/places/1.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/places/1.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
