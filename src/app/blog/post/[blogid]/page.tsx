import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import ShareButton from '@/components/ShareButton';
import Script from "next/script";
import { Tweet } from '@/components/Tweet';
import Link from 'next/link';
import { Parent, Node } from 'unist';
import { visit } from 'unist-util-visit';
import '@/app/globals.css';

interface HeaderNode extends Parent {
    depth: number;
    children: Node[];
}

interface Header {
    depth: number;
    text: string;
}

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

    //headerを抽出
    const extractHeader = (content: string): Header[] => {
        const tree = remark().use(remarkParse).parse(content)
        const headers: Header[] = [];

        visit(tree, 'heading', (node: HeaderNode) => {
            if (node.depth === 1 || node.depth === 2 || node.depth === 3 || node.depth === 4) {
                const text = node.children.map((child: any) => {
                    if ('value' in child) {
                      return child.value as string;
                    }
                    return '';
                }).join('');

                headers.push({
                    depth: node.depth,
                    text: text,
                });
            }
        });

        return headers;
    }

    const headers = extractHeader(content);

    const frontMark = (depth:number): string => {
        const mark: string = depth>2 ? '●' : '◉';
        return mark;
    }

    return (
        <div className='page-sep'>
            <div className='App-main-blog'>
                <div className='blog-wrapper'>
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
                </div>
            </div>
            <div className='blog-page-list'>
                <h2>目次</h2>
                {
                    headers.map((prop, index) => (
                        <div key={index} className='blog-contents-list'>
                            <a href={'#' + prop.text}>
                                <p style={{fontWeight: 800 - prop.depth*100}}>
                                    <span style={{marginLeft: (prop.depth-2)*3 + 'px',
                                        marginRight: '10px'
                                    }}>{frontMark(prop.depth)}</span>
                                    {prop.text}
                                </p>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}