'use client';

import React, { useEffect } from "react";

interface ShareButtonProps {
    text: string;
    url: string; 
};

const ShareButton = (props: ShareButtonProps) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a href='https://twitter.com/share?ref_src=twsrc%5Etfw' 
            className='twitter-share-button' 
            data-show-count='false'
            data-text={ props.text }
            data-url={ props.url }>Tweet</a>
    );
};

export default ShareButton;