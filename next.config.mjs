import remarkMermaid from 'remark-mermaidjs';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkMermaid],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
