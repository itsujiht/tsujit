import Image from 'next/image';
import '@/app/globals.css';

function Footer() {
    return (
        <footer className='App-footer'>
            <a className='icon' href='https://twitter.com/mesheep_sleep' target='_blank' rel='noopener noreferrer'>
                <Image src='/images/xlogo.png' alt='X icon' width='20' height='20' />
            </a>
            <p> &copy; 2024 nemuSheep</p>
        </footer>
    );
}

export default Footer;