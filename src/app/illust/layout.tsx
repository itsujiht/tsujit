import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "illust - eep",
    description: "illustration of nemusheep",
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
                まともな絵は&nbsp;<a href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>Twitter(@myn_Mei)</a>&nbsp;
                あるいは&nbsp;<a href='https://www.pixiv.net/users/68447218' target='_blank' rel='noopener noreferrer'>pixiv</a>&nbsp;へ
            </p>
            {children}
        </div>
    );
}