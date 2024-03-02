import type { Metadata } from 'next';
import { images } from '@/contents/illustration/images';
import '@/app/globals.css';

export async function generateMetadata({ params }: { params: {picid: number}}): Promise<Metadata> {
    const picid = params.picid;

    const metadata: Metadata = {
        title: images[picid].title + ' - eep',
        description: images[picid].description,
        openGraph: {
            title: images[picid].title + ' - eep',
            description: 'illustration of nemuSheep',
            url: 'https://ne-doko.vercel.app/illust' + '/' + picid,
            siteName: 'ne-doko',
            locale: 'ja_JP',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: images[picid].title + ' - eep',
            description: 'illustration of nemuSheep',
            site: '@mesheep_sleep',
            creator: '@myn_Mei',
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