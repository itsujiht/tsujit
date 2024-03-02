import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { images } from '@/contents/illustration/images';

export default function DetailPicture({ params }: { params: { picid: number } }) {
    const picid = params.picid;

    return (
        <div className='card-container'>
            <div className='illust-card'>
                <Link href='/illust'>
                    <Image src={ images[picid].src } alt={ images[picid].alt } style={{ cursor: 'pointer' }} priority={true}/>
                </Link>
                <div className='illust-card-content'>
                    <h2>{ images[picid].title }</h2>
                    <p>{ images[picid].description }</p>
                    <p style={{ color: '#a0a0a0' }}>Date: { images[picid].date }</p>
                    <div className='illust-card-share'>
                        <ShareButton text={ images[picid].title + ' on pixheep' } url={ 'https://ne-doko.vercel.app/illust' + '/' + picid } />
                    </div>
                </div>
            </div>
        </div>
    );
}