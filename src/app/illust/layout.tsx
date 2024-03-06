import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "illust - eep",
    description: "illustration of nemuSheep",
    openGraph: {
        title: 'illust - eep',
        description: 'illustration of nemuSheep',
        url: 'https://ne-doko.vercel.app/illust',
        siteName: 'ne-doko',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'illust - eep',
        description: 'illustration of nemuSheep',
        site: '@mesheep_sleep',
        creator: '@mesheep_sleep',
    },
  };
  
export default function IllustLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='App-illust'>
            <h1>pixheep</h1>
            <p>練習や落書き置き場<br />
                <span>まともな絵は</span><span>&nbsp;<a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>&nbsp;</span>
                <span>あるいは&nbsp;<a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>pixiv</a>&nbsp;へ</span>
            </p>
            {children}
        </div>
    );
}