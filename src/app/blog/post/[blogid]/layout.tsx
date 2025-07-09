import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import '@/app/globals.css';

export async function generateMetadata({ params }: { params: {blogid: string}}): Promise<Metadata | undefined> {
    const blogid = decodeURIComponent(params.blogid);
    const filePath = fs.existsSync(path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.md`)) ? path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.md`) : path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.mdx`);

    try {
        fs.accessSync(filePath, fs.constants.R_OK);
    } catch (error) {
        return undefined;
    }

    const post = fs.readFileSync(filePath, 'utf-8');

    const { data } = matter(post);

    const metadata: Metadata = {
        title: data.title + ' by tsujit',
        description: data.description,
        metadataBase: new URL('https://tsujit.vercel.app/blog/post' + '/' + encodeURIComponent(blogid)),
        openGraph: {
            title: data.title + ' - eep',
            description: data.description,
            url: 'https://tsujit.vercel.app/blog/post' + '/' + encodeURIComponent(blogid),
            siteName: 'tsujit',
            locale: 'ja_JP',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: data.title + ' by tsujit',
            description: data.description,
            site: '@myn_Mei',
            creator: '@myn_Mei',
        },
    };

    return metadata;
}

export default function BlogContentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div >
            {children}
        </div>
    );
}