import type { Metadata } from 'next';
import { images } from '@/contents/illustration/images';
import '@/app/globals.css';

export async function generateMetadata({ params }: { params: {picid: number}}): Promise<Metadata | undefined> {
    const picid = params.picid;

    if (images[picid] === undefined) {
        return undefined;
    }

    const metadata: Metadata = {
        title: images[picid].title + ' - eep',
        description: images[picid].description,
        metadataBase: new URL('https://ne-doko.vercel.app/illust' + '/' + picid),
        openGraph: {
            title: images[picid].title + ' - eep',
            url: 'https://ne-doko.vercel.app/illust' + '/' + picid,
            siteName: 'ne-doko',
            locale: 'ja_JP',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: images[picid].title + ' - eep',
            site: '@mesheep_sleep',
            creator: '@myn_Mei',
            images: [ 
                {
                  url: 'https://github.com/nemusheep/ne-doko/blob/main/src/contents/illustration/picture/' + encodeURIComponent(images[picid].alt) + '.png',
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