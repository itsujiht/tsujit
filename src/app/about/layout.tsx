import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "about me",
    description: "about tsujit",
    metadataBase: new URL('https://tsujit.vercel.app/about'),
    openGraph: {
        title: 'about mw',
        description: 'about tsujit',
        url: 'https://tsujit.vercel.app/about',
        siteName: 'tsujit',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'about me',
        description: 'about tsujit',
        site: '@myn_Mei',
        creator: '@myn_Mei',
    },
  };
  
export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='App-main'>
            {children}
        </div>
    );
}