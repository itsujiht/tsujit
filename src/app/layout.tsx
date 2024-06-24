import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ne doko - eep",
  description: "web site of nemuSheep",
  metadataBase: new URL('https://ne-doko.vercel.app'),
  openGraph: {
    title: 'ne doko - eep',
    description: 'web site of nemuSheep',
    url: 'https://ne-doko.vercel.app',
    siteName: 'ne-doko',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ne doko - eep',
    description: 'web site of nemuSheep',
    site: '@mesheep_sleep',
    creator: '@mesheep_sleep',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="App">
          <div>
            {children}
          </div>
          <Header />
          <Footer />
        </div>
      </body>
    </html>
  );
}
