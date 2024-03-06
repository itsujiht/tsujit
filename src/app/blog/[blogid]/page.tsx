import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import '@/app/globals.css';

function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const components = {
    img: (props: any) => {
        return (
          <Image src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            layout="responsive"
            objectFit='contain'
          />
        )
      },
    //ここに使うコンポーネントを手動で足す他ないのか？
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
                <p>{formatDate(data.date)}</p>
            </div>
            <div className='blog-content'>
                <MDXRemote source={content} components={components}/>
            </div>
        </div>
    );
}