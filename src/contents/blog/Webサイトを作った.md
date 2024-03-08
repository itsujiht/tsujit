---
title: Webサイトを作った
author: sheep
date: 2024-03-08
description: Next.jsでWebサイトを作った。なんもわかってないけど。とりあえずの形だけはできたっぽいので。
---
寒さが去ることを知らないこの頃、布団から出られないでおなじみの私。  
<br />

## Webサイト、はじめました。
つい最近まではjavascriptのjの字も知らない、javaとjavascriptの違いもわからないような人間で、HTMLでそれっぽいページを作るのにすら一苦労していた。そこで勉強の一環として自分のWebサイトのようなものを作ってみることに。個人的にWeb関連はCやPythonなどを単純な演算から学んできたように基礎を積み重ねていく形ではなく、作りたいものがあってそこに必要な知識を調べるなりして獲得していく形が勉強として適しているなと思っている。  

記事などのコンテンツの更新や追加が簡便になるよう、動的ルーティングによって詳細ページが生成されるようにすることを目的にNext.jsを用いることにした。多分役不足だろうが、環境構築が楽であることと、Reactは少し触れていたため知識が活かせるかなあと考えていたからである。←後々リソースの少なさに苦しむことに...  

ところで[冷やし中華の人](https://ja.wikipedia.org/wiki/AMEMIYA)はどこに行ってしまったのだろうか？彼の行方は誰も知らない。
<br />

### 使ったもの
ここで主な選手紹介を。
- [**Next.js**](https://nextjs.org/)  
	フレームワーク。v13.4からの新機能であるところのApp routerを用いている。ページに対応するディレクトリにlayoutとpageさえ置けばあとはなんとかしてくれる。  
	ImageやLinkといった軽量、高速なコンポーネントも提供されていて良い。
- [**Vercel**](https://vercel.com/)  
	ホスティング先。書いたNext.jsをデプロイしてくれる。
- **typescript**  
	言語。コンパイルエラーを吐いてくれるから修正がやりやすかったのは利点としてあると思う。
- [**gray-matter**](https://www.npmjs.com/package/gray-matter)  
	記事のflontmatterを読み取ってくれる。
- [**next-mdx-remote**](https://www.npmjs.com/package/next-mdx-remote)  
	markdown、MDXをHTMLにしてくれる。
- [**ChatGPT 3.5**](https://chat.openai.com/)  
	困ったときにとりあえずコードを投げるとそれっぽく直してくれる。jsからtsへの変換は散々してもらった。App routerに対応してないのが3.5らしい。  
<br />

### ページ構造
簡単な構造は以下の通りである。
<img src='/images/page_struct.png' alt='page_struct' width='95%' height='auto' />
Dynamic Routingによって\[blogid]、\[picid]は適切なページのパスとして置き換えられる。  
詳しくは[githubのリポジトリ](https://github.com/nemusheep/ne-doko)を参照。
<br />

### わかってない部分
- markdown、MDXで書いた記事はnext-mdx-remote/rscのMDXRemoteによってレンダリングするようにしているが、serializeしたソースをnext-mdx-remoteのMDXRemoteでしようとするとuseEffectがエラーを起こした。そもそもそれぞれの処理が何をしているかわかっていないので原因もわからない。
- mdxのコンポーネントのimport文が全く機能しなければ別にテキストとしてレンダリングされるわけでもないのでただ消えているだけになっている。どうして？
- MDXRemoteにremarkPluginやrehypePluginを渡そうとしたが、electronやplaywrightがどうのと言われてエラーを吐くもんで、node_moduleのソースも見てみたが手も足もでなかった。上の図だってremark-mermaidjsかrehype-mermaidでいい感じにやりたかったのに...   codeブロックを探して後からsvgに置換する方法も考えたがすぐには実現できなそうだった。
<br />

### おわりに
今までネットの知識のパッチワークでなんとかしていたのが仇になっているなと薄々感じる。見る分にはどのページも問題なく、当初の目的はなんとか達成できていそうなのでとりあえずここまで。教えてくれる人はいつでも募集中。  
<br />

