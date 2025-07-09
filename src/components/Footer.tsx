import Image from 'next/image';
import '@/app/globals.css';

function Footer() {
    return (
        <footer className='App-footer'>
            <a className='icon' href='https://github.com/tsujit' target='_blank' rel='noopener noreferrer'>
                <Image src='/images/github-mark-white.png' alt='Github icon' width='20' height='20' />
            </a>
            <a className='icon' href='https://twitter.com/myn_Mei' target='_blank' rel='noopener noreferrer'>
                <Image src='/images/xlogo-white.png' alt='X icon' width='20' height='20' />
            </a>
            <p> &copy; 2024- tsujit</p>
        </footer>
    );
}

export default Footer;