import '@/app/globals.css';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

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

async function getStaticData() {
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

    return posts;
}

export default async function BlogHome({ params }: { params: { pageid: number } }) {
    const currentPage: number = params.pageid;

    const allPosts = await getStaticData();
    const elementNum = 5;
    const chunkedPosts = [];
    for (let i = 0; i < allPosts.length; i+=elementNum) {
        chunkedPosts.push(allPosts.slice(i, i+elementNum));
    }

    if (chunkedPosts[currentPage-1] === undefined) {
        return notFound();
    }
    
    const posts = chunkedPosts[currentPage-1];

    return (
        <div className='App-blog'>
            <div className='page-desc'>
                <h1>記事一覧</h1>
            </div>
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
            <div className="pagination">
                {
                    currentPage > 2 && (
                        <Link href={`/blog/1`} className="pagination-link">
                            1
                        </Link>
                    )
                }
                {
                    currentPage > 3 && (
                        <div className='abbreviation'>
                            <p>...</p>
                        </div>
                    )
                }
                {
                    currentPage > 1 && (
                        <Link href={`/blog/${Number(currentPage) - 1}`} className="pagination-link">
                            {Number(currentPage) - 1}
                        </Link>
                    )
                }
                <Link href={`/blog/${currentPage}`} className="current-pagination-link">
                    {currentPage}
                </Link>
                {
                    currentPage < chunkedPosts.length && (
                        <Link href={`/blog/${Number(currentPage) + 1}`} className="pagination-link">
                            {Number(currentPage) + 1}
                        </Link>
                    )
                }
                {
                    currentPage < chunkedPosts.length - 2 && (
                        <div className='abbreviation'>
                            <p>...</p>
                        </div>
                    )
                }
                {
                    currentPage < chunkedPosts.length - 1 && (
                        <Link href={`/blog/${Number(chunkedPosts.length)}`} className="pagination-link">
                            {Number(chunkedPosts.length)}
                        </Link>
                    )
                }
            </div>
        </div>
    );
}