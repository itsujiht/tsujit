import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "about - eep",
    description: "about nemuSheep",
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