import { Inter, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "CURATOR - Explore Recent Cinema",
  description: "A curated selection of cinematic masterpieces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} bg-[#f9f6f5] font-body text-[#2f2e2e] selection:bg-[#b22200] selection:text-white min-h-screen relative`}>
        <div className="fixed inset-0 paper-texture z-[100] pointer-events-none" />
        <Header />
        <main className="pt-20 pb-32 relative z-10">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
