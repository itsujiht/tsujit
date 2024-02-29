import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { images, imgsrcs } from '@/contents/illustration/images';

export default function DetailPicture({ params }: { params: { slug: number } }) {

    return (
        <div className='card-container'>
            <div className='illust-card'>
                <Link href='/illust'>
                    <Image src={ imgsrcs[params.slug] } alt={ images[params.slug].alt } style={{ cursor: 'pointer' }} priority={true}/>
                </Link>
                <div className='illust-card-content'>
                    <h2>{ images[params.slug].title }</h2>
                    <p>{ images[params.slug].description }</p>
                    <p style={{ color: '#a0a0a0' }}>Date: { images[params.slug].date }</p>
                    <div className='illust-card-share'>
                        <ShareButton text={ images[params.slug].title + ' on pixseep' } url={ 'https://nemusheep.github.io/illust' + '/' + params.slug } />
                    </div>
                </div>
            </div>
        </div>
    );
}