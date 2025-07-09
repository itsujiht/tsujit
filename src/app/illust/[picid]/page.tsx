import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { images } from '@/contents/illustration/images';
import { notFound } from 'next/navigation';

export default function DetailPicture({ params }: { params: { picid: number } }) {
    const picid = params.picid;

    if (images[picid] === undefined) {
        return notFound();
    }

    return (
        <div className='card-container'>
            <div className={`illust-card${images[picid].src.width > images[picid].src.height? '-landscape' : ''}`}>
                <Link href='/illust'>
                    <Image src={ images[picid].src } alt={ images[picid].alt } style={{ cursor: 'pointer' }} priority={true}/>
                </Link>
                <div className='illust-card-content'>
                    <h2>{ images[picid].title }</h2>
                    <p>{ images[picid].description }</p>
                    <p style={{ color: '#a0a0a0' }}>Date: { images[picid].date }</p>
                    <div className='illust-card-share'>
                        <ShareButton text={ images[picid].title + ' on pixheep' } url={ 'https://tsujit.vercel.app/illust' + '/' + picid } />
                    </div>
                </div>
            </div>
        </div>
    );
}