import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "takuto tsuji artworks",
    description: "artworks by tsujit",
    metadataBase: new URL('https://tsujit.vercel.app/illust'),
    openGraph: {
      title: 'tsujit artworks',
      description: 'artworks by tsujit',
      url: 'https://tsujit.vercel.app/illust',
      siteName: 'tsujit',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'tsujit',
      description: 'artworks by tsujit',
    },
};
  
export default function IllustLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='App-main'>
            <div className='App-illust'>
                <div className='page-desc'>
                    <h1>My Artworks</h1>
                    <p>練習なども含めた作品置き場です<br />
                        <span>2次創作は</span><span>&nbsp;<a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>&nbsp;</span>
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
}