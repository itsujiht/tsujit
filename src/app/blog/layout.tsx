import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "blog - eep",
    description: "blog of nemusheep",
  };
  
export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}