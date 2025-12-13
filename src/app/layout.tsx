import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Learnest.ai",
  description: "Online learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar/>
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
