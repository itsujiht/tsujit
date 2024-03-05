import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import '@/app/globals.css';

function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

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
    const htmlContent = marked(content);

    return (
        <div className='App-blog'>
            <div className='blog-intro'>
                <h1>{data.title}</h1>
                <p>{formatDate(data.date)}</p>
            </div>
            <div className='blog-content'>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </div>
    );
}