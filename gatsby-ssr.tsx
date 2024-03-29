import { GatsbySSR } from 'gatsby';
import React from 'react';

// ssr only works when gatsby build
export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return (
    <html lang="ko">
      <head>
        {/* <link
          key="pretendard-thin"
          rel="preload"
          href="/fonts-Pretendard-Thin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
        {/* <link
       key="pretendard-extralight"
       rel="preload"
       href="/fonts/Pretendard-ExtraLight.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     /> */}
        <link
          key="pretendard-light"
          rel="preload"
          href="/fonts/Pretendard-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        ,
        <link
          key="pretendard-regular"
          rel="preload"
          href="/fonts/Pretendard-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* <link
       key="pretendard-medium"
       rel="preload"
       href="/fonts/Pretendard-Medium.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     /> */}
        {/* <link
       key="pretendard-semibold"
       rel="preload"
       href="/fonts/Pretendard-SemiBold.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     /> */}
        <link
          key="pretendard-bold"
          rel="preload"
          href="/fonts/Pretendard-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          key="pretendard-extrabold"
          rel="preload"
          href="/fonts/Pretendard-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          key="pretendard-black"
          rel="preload"
          href="/fonts/Pretendard-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* <link
       key="firacode-light"
       rel="preload"
       href="/fonts/FiraCode-Light.ttf"
       as="font"
       type="font/ttf"
       crossOrigin="anonymous"
     /> */}
        <link
          key="firacode-regular"
          rel="preload"
          href="/fonts/FiraCode-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* <link
       key="firacode-medium"
       rel="preload"
       href="/fonts/FiraCode-Medium.ttf"
       as="font"
       type="font/ttf"
       crossOrigin="anonymous"
     /> */}
        {/* <link
       key="firacode-semibold"
       rel="preload"
       href="/fonts/FiraCode-SemiBold.ttf"
       as="font"
       type="font/ttf"
       crossOrigin="anonymous"
     /> */}
        {/* <link
       key="firacode-bold"
       rel="preload"
       href="/fonts/FiraCode-Bold.ttf"
       as="font"
       type="font/ttf"
       crossOrigin="anonymous"
     /> */}
      </head>
      <body>{element}</body>
    </html>
  );
};
