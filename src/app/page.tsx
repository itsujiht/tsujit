import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';
import Greeting from "@/components/Greeting";
import Script from "next/script";
import { Tweet } from '@/components/Tweet';

export default function Home() {
    return (
        <div className='App-main'>
            <div className='App-home'>
                <div className='page-desc'>
                    <h1>
                        寝床
                    </h1>
                </div>
                <div className='greet'>
                    <Greeting now={new Date()}/>
                </div>
                <div className="tweet">
                    <Tweet id="1638589333744779264" />
                    <Script src="https://platform.twitter.com/widgets.js"
                        strategy="lazyOnload"
                    />
                </div>
            </div>
        </div>
    );
}
