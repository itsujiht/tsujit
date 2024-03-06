import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/contents/illustration/images';

export default function IllustPage() {

    return (
        <div className='card-container'>
            <div className='illust-list'>
                {
                    images.map((image, index) => (
                        <div key={ index }>
                            <Link href={'/illust' + '/'+ index}>
                                <Image src={ image.src } alt={ image.alt } style={{ cursor:'pointer' }}/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}