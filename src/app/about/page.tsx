import '@/app/globals.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import sheepicon from '@/images/sheepicon.png';

export default async function AboutPage() {
    const filePath = path.join(process.cwd(), 'src', 'contents', 'about', 'profile.md');
    const mdArticle = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(mdArticle);
    const htmlContent = marked(content);

    return (
        <div className='App-about'>
            <div className='about-title'>
                <Image src={ sheepicon } alt='sheepicon' />
                <h1>{ data.title }</h1>
            </div>
            <div className='about-content'>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </div>
    );
}