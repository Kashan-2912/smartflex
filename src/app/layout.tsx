import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import Aurora from "../components/Aurora"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartFlex AI - Get Jacked",
  description: "A modern fitness FI platform to get jacked for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />

            <div className="fixed inset-0 -z-1">
              <Aurora
                colorStops={["#0284c7", "#06b6d4", "#3b82f6"]}
                blend={1}
                amplitude={1.0}
                speed={0.5}
              />
            </div>

          <main className="pt-24 flex-grow">{children}</main>

          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
