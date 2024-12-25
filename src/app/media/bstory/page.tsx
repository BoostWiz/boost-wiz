import React from 'react';
import Link from 'next/link';
import Banner from '@/shared/components/Banner';
import Card from './components/card';

export default async function Wiztv() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/media/highlightlist?count=10`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      cache: 'no-store', // 또는 next: { revalidate: 0 }
    },
  );
  const data = await response.json();

  // if (isLoading) return <div>로딩 중...</div>;
  // if (error) return <div>에러가 발생했습니다</div>;

  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="위즈 티비"
          description="한국 프로 야구의 10번째 심장 kt wiz 야구단의 이야기입니다."
        />
      </div>
      {data.data.list.map((item: any) => (
        <Link href="/" key={item.artcSeq}>
          <Card
            imgSrc={item.imgFilePath || '/common/banner.png'}
            Title={item.artcTitle || '영상 제목!'}
            contents={item.contents || '영상설명!'}
            progress={30}
          />
        </Link>
      ))}
    </section>
  );
}
