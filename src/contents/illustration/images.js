//images on pixeep
import img0 from './picture/twicon1.png';
import img1 from './picture/homura.png';
import img2 from './picture/Mercury.png';
import img3 from './picture/ぼきた.png';
import img4 from './picture/緒山まひろ.png';
import img5 from './picture/Frieren.png';

const images = [
    {
        title: 'アイコン(2024/1/26〜)',
        description: 'シンプルな塗りでいい感じに描けて満足',
        src: img0,
        alt: 'twicon1',
        date: '2024-01-26',
    },
    {
        title: '暁美ほむら',
        description: '眼鏡かけてる方が好きだったりします',
        src: img1,
        alt: '暁美ほむら',
        date: '2022-04-07',
    },
    {
        title: 'スレったマーキュリー',
        description: '今見てもいい顔に描けているなあと思う',
        src: img2,
        alt: 'スレミオのスレ',
        date: '2022-11-06',
    },
    {
        title: 'ぼきた',
        description: '清書とかしたかったけど諦め',
        src: img3,
        alt: 'ぼきた',
        date: '2023-01-01',
    },
    {
        title: '緒山まひろ',
        description: 'かわいいね',
        src: img4,
        alt: 'まひろ',
        date: '2023-05-12',
    },
    {
        title: 'フリーレンさん',
        description: 'ちょっとアイプチさせました',
        src: img5,
        alt: 'Frieren',
        date: '2024-04-14',
    },
];

images.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export { images };