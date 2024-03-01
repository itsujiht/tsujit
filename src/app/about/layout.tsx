import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "about - eep",
    description: "about nemuSheep",
    openGraph: {
        title: 'about - eep',
        description: 'about nemuSheep',
        url: 'https://ne-doko.vercel.app/about',
        siteName: 'ne-doko',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'about - eep',
        description: 'about nemuSheep',
        site: '@mesheep_sleep',
        creator: '@mesheep_sleep',
    },
  };
  
export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}