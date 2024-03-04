import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import '@/app/globals.css';

export default async function Post({ params }: { params: { blogid: string } }){
    const blogid = decodeURIComponent(params.blogid);
    const filePath = fs.existsSync(path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.md`)) ? path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.md`) : path.join(process.cwd(), 'src', 'contents', 'blog', `${blogid}.mdx`);
    const post = fs.readFileSync(filePath, 'utf-8');
    
    const { data, content } = matter(post);
    const htmlContent = marked(content);

    return (
        <div className='App-blog'>
            <div className='blog-title'>
                <h1>{data.title}</h1>
            </div>
            <div className='blog-content'>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </div>
    );
}