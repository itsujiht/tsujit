import type { Metadata } from 'next';
import { images } from '@/contents/illustration/images';
import '@/app/globals.css';

export async function generateMetadata({ params }: { params: {picid: number}}): Promise<Metadata | undefined> {
    const picid = params.picid;

    if (images[picid] === undefined) {
        return undefined;
    }

    const metadata: Metadata = {
        title: images[picid].title + ' by tsujit',
        description: images[picid].description,
        metadataBase: new URL('https://tsujit.vercel.app/illust' + '/' + picid),
        openGraph: {
            title: images[picid].title + ' by tsujit',
            url: 'https://tsujit.vercel.app/illust' + '/' + picid,
            siteName: 'tsujit',
            locale: 'ja_JP',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: images[picid].title + ' by tsujit',
            site: '@myn_Mei',
            creator: '@myn_Mei',
            images: [ 
                {
                  url: 'https://github.com/itsujiht/tsujit/blob/main/src/contents/illustration/picture/' + encodeURIComponent(images[picid].alt) + '.png',
                  width: 1200,
                  height: 630,
                },
            ],
        },
    };

    return metadata;
}
  
export default function DetailIllustLayout({
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