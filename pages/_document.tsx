import { Html, Head, Main, NextScript } from "next/document";

// Search engine optimiizing

export default function Document() {
  return (
    <Html lang="en">           
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="title" content="Nestar Demo" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
            {/* SEO */} 
          <meta name="keyword"
           content={"nestar , nestar.uz, devex mern, mern nestjs fullstack"}
           />
          <meta name="description" content={
            "Buy and sell properties anywhere anytime is South Korea. |" +
            "Покупайте и продавайте недвижимость в любом месте и в любое время в Южной Корее" +
            "대한미국 언제 어디에서나 부동산을 사고팔 수 있습니다"
            }
            />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
