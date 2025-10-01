import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-learning สาขาวิทยาการคอมพิวเตอร์",
  description: "เว็บไซต์ E-learning สำหรับสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          minHeight: '100vh', 
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <LanguageProvider>
          <Navbar />
          <main style={{ 
            flex: 1,
            width: '100%',
            margin: 0,
            padding: 0
          }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}