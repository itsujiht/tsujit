//images on pixeep
import img0 from './picture/Front1.png';
import img1 from './picture/Front2.png';
import img2 from './picture/ChDesign1.png';
import img3 from './picture/ChDesign2.png';
import img4 from './picture/Scarret.png';
import img5 from './picture/hirari.png';
import img6 from './picture/IllustTeto.png';
import img7 from './picture/illustHina.png';
import img8 from './picture/illustKazusa.png';
import img9 from './picture/umi.png';
import img10 from './picture/figuresDessin.jpg';
import img11 from './picture/inori.jpg';
import img12 from './picture/nigiri.jpg';
import img13 from './picture/kiritto.png';

const images = [
    {
        title: 'C103表紙',
        description: 'C103同人イラスト集「Momoiro Archive」の表紙デザインです',
        src: img0,
        alt: 'C103Front',
        date: '2023-12-16',
    },
    {
        title: 'C105表紙',
        description: 'C105同人イラスト集「Star Peace」の表紙デザインです',
        src: img1,
        alt: 'C105Front',
        date: '2024-12-20',
    },
    {
        title: 'キャラクターデザイン(スカーレット)',
        description: 'ご依頼を受けデザインさせていただいた炎使いの魔法少女です',
        src: img2,
        alt: 'ScarretDesign',
        date: '2025-06-01',
    },
    {
        title: 'キャラクターデザイン(keth)',
        description: '習作として近未来×和風を意識してデザインしました',
        src: img3,
        alt: 'keth',
        date: '2025-04-20',
    },
    {
        title: 'スカーレット',
        description: 'デザインさせていただいたキャラクターの立ち絵likeな一枚絵を描かせていただきました',
        src: img4,
        alt: 'Scarret',
        date: '2025-06-08',
    },
    {
        title: '蝶。(アイディスマイル)',
        description: '楽曲「アイディスマイル」の歌ってみた動画用のイラストを描かせていただきました',
        src: img5,
        alt: 'hirari',
        date: '2025-05-15',
    },
    {
        title: '重音テト(Welcome to underground)',
        description: 'オリジナル楽曲「Welcome to underground」のMV用イラストを描かせていただきました',
        src: img6,
        alt: 'teto',
        date: '2025-03-03',
    },
    {
        title: '空崎ヒナ',
        description: 'かっこいい瞬間を見てみたいと思い描きました',
        src: img7,
        alt: 'hina',
        date: '2024-02-29',
    },
    {
        title: '杏山カズサ',
        description: 'ベースを弾いている感をしっかり表現しました',
        src: img8,
        alt: 'kazusa',
        date: '2024-08-18',
    },
    {
        title: '園田海未(ドレスフォーム)',
        description: 'ラブライブ!×ToLoveる企画同人誌「ドレスフォーム合同」に寄稿させていただきました',
        src: img9,
        alt: 'umi',
        date: '2024-05-29',
    },
    {
        title: '基本図形デッサン',
        description: 'デッサンの手始めとして基本的な3次元立体を表現しました',
        src: img10,
        alt: 'figureDessin',
        date: '2025-06-10',
    },
    {
        title: '手デッサン(手を合わせる)',
        description: '2つの手によってできる影や反射光に着目して表現しました',
        src: img11,
        alt: 'inoriDessin',
        date: '2025-06-20',
    },
    {
        title: '手デッサン(握り拳)',
        description: '拳を握った時の手の皺をうまく表現できたと思っています',
        src: img12,
        alt: 'nigiriDessin',
        date: '2025-06-12',
    },

    {
        title: '天然水　きりっと果実',
        description: 'ペットボトル特有の表面の凹凸と透け感をうまく出せるよう挑戦しました',
        src: img13,
        alt: 'kirittoDessin',
        date: '2025-07-02',
    },
];

images.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export { images };