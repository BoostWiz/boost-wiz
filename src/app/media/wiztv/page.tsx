import React from 'react';
import Link from 'next/link';
import Card from './components/card';

export default function Wiztv() {
  return (
    <>
      <div>위즈티비</div>
      <Link href="/">
        <Card
          imgSrc="/common/banner.png"
          Title="영상 제목!"
          contents="영상설명!"
          progress={30}
        />
      </Link>
    </>
  );
}
