import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "takuto tsuji blog",
    description: "blog by tsujit",
    metadataBase: new URL('https://tsujit.vercel.app/blog/1'),
    openGraph: {
      title: 'tsujit blog',
      description: 'blog by tsujit',
      url: 'https://tsujit.vercel.app/blog/1',
      siteName: 'tsujit',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'tsujit',
      description: 'blog by tsujit',
    },
};
  
export default function BlogLayout({
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