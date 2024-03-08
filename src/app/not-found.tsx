import '@/app/globals.css';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='not-found'>
            <h1>404 not found</h1>
            <Link href='/'>
                <p>→Go top</p>
            </Link>
        </div>
    );
}