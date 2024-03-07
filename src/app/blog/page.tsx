import '@/app/globals.css';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface postData {
    data: any;
    blogid: string;
};

function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    if (date === undefined) {
        return '';
    }
    return date.toLocaleDateString('en-US', options);
}

export default async function BlogHome() {
    const dirPath = path.join(process.cwd(), 'src', 'contents', 'blog');
    const fileNames = fs.readdirSync(dirPath);

    const posts: postData[] = [];

    fileNames.forEach(fileName => {
        const filePath = path.join(dirPath, fileName);
        const post = fs.readFileSync(filePath, 'utf-8');
        
        const { data } = matter(post);
        const { name, ext } = path.parse(fileName);

        if(ext === '.md' || ext === '.mdx'){
            posts.push({
                data: data,
                blogid: name,
            });
        }
    });

    posts.sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));

    return (
        <div className='App-blog'>
            <div className='blog-container'>
                {
                    posts.map((post, index) => (
                        <div key={ index } className='blog-card'>
                            <Link href={ '/blog/post' + '/' + `${post.blogid}`}>
                                <h2>{post.data.title}</h2>
                                <div className='blog-description'>
                                    <p>{post.data.description}</p>
                                </div>
                                <div className='blog-date'>
                                    <p>{formatDate(post.data.date)}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}