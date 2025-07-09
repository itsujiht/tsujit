import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "takuto tsuji website",
  description: "web site of tsujit",
  metadataBase: new URL('https://tsujit.vercel.app'),
  openGraph: {
    title: 'tsujit website',
    description: 'web site of tsujit',
    url: 'https://tsujit.vercel.app',
    siteName: 'tsujit',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'tsujit',
    description: 'web site of tsujit',
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
