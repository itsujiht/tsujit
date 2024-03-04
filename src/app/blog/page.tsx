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

        posts.push({
            data: data,
            blogid: fileName.split('.')[0],
        });
    });

    posts.sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));

    return (
        <div className='App-blog'>
            {
                posts.map((post, index) => (
                    <Link key={ index } href={ '/blog' + '/' + `${post.blogid}` } >
                        <div className='blog-card'>
                            <h2>{post.data.title}</h2>
                            <p>{formatDate(post.data.date)}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}