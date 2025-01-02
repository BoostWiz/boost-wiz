import React from 'react';
import Banner from '@/shared/components/Banner';
import WizStoryContainer from './components/StoryContainer';

export default async function Wiztv() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/media/highlightlist?count=500`,
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
  console.log(data);

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
      <WizStoryContainer data={data.data} />
    </section>
  );
}
