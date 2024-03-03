import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "blog - eep",
    description: "blog of nemusheep",
    openGraph: {
        title: 'blog - eep',
        description: 'blog of nemuSheep',
        url: 'https://ne-doko.vercel.app/blog',
        siteName: 'ne-doko',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'blog - eep',
        description: 'blog of nemuSheep',
        site: '@mesheep_sleep',
        creator: '@mesheep_sleep',
    },
  };
  
export default function BlogLayout({
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