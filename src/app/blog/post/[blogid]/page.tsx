import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import ShareButton from '@/components/ShareButton';
import Script from "next/script";
import { Tweet } from '@/components/Tweet';
import Link from 'next/link';
import '@/app/globals.css';

function formatDate(date: Date, isUS: boolean) {
    if (isUS) {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    } else {
        const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('ja-JP', options);
    }
}

const components = {
    img: (props: any) => {
        return (
            <Image src={props.src}
                alt={props.alt}
                layout="responsive"
                objectFit='contain'
                style={{width: props.width,
                    height: props.height}}
            />
        )
    },
    Tweet: (props: any) => {
        return (
            <div className='tweet'>
                <Tweet id={props.id}/>
            </div>
        )
    },
    Script: (props: any) => {
        return (
            <Script src={props.src}
                strategy={props.strategy}
            />
        )
    }
    //LinkcardとかCodeblockとか作りたい
};

export default async function Post({ params }: { params: { blogid: string } }){
    const blogid = decodeURIComponent(params.blogid);
    const filePath = fs.existsSync(path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.md`)) ? path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.md`) : path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.mdx`);

    try {
        fs.accessSync(filePath, fs.constants.R_OK);
    } catch (error) {
        return notFound();
    }

    const post = fs.readFileSync(filePath, 'utf-8');
    
    const { data, content } = matter(post);

    return (
        <div className='App-blog'>
            <div className='blog-intro'>
                <h1>{data.title}</h1>
                <p>{formatDate(data.date, true)}</p>
            </div>
            <div className='blog-content'>
                <MDXRemote source={content} components={components} />
            </div>
            <div className='blog-outro'>
                <p>{data.author + ' - ' + formatDate(data.date, false)}</p>
                <ShareButton text={data.title} url={'https://ne-doko.vercel.app/blog/post' + '/' + params.blogid} />
            </div>
        </div>
    );
}