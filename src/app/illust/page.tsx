import '@/app/globals.css';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { images, imgsrcs } from '@/contents/illustration/images';

export default function IllustPage() {

    return (
        <div className='card-container'>
                <div className='illust-list'>
                    {
                        images.map((image, index) => (
                            <Link href={'/illust' + '/'+ index}>
                                <Image key={ index } src={ imgsrcs[index] } alt={ image.alt } style={{ cursor:'pointer' }}/>
                            </Link>
                        ))
                    }
                </div>
        </div>
    );
}