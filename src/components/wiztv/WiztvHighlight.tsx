'use client';

import { useEffect, useState } from 'react';
import { fetchHLVideo } from '@/api/wiztv/useGetWiztv';
import { flexColumnCenter, flexRowSpaceBetween } from '@/styles/flex';
import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import WiztvCard from './WiztvCard';

export default function WiztvHighlight() {
  const [videoData, setVideoData] = useState<HighlightItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchHLVideo('위즈덕후', 12, 1);
        setVideoData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {/* 검색창 */}
      <div className="w-full my-4 h-16 bg-[#ECEEF2]/50 border-y border-y-[#ECEEF2]">
        <div className={`container-default !py-0 ${flexRowSpaceBetween}`}>
          <p className={`${flexColumnCenter} ml-3`}>
            위즈덕후가 되어 승리날의 덕아웃을 가장 가까이서 확인해보세요!
          </p>
          <div className={`w-[350px] flex items-center text-sm mr-6`}>
            <p className="whitespace-nowrap mr-2">검색</p>
            <Input
              className="bg-white mr-1"
              placeholder="원하는 키워드로 검색하세요."
            />
            <Button>검색</Button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 place-items-center">
        {videoData.map((item) => (
          <WiztvCard
            key={item.artcSeq}
            imgSrc={item.imgFilePath || '/common/banner.png'}
            Title={item.artcTitle || '영상 제목!'}
            viewCnt={item.viewCnt || '본 사람!'}
            date={item.contentsDate}
          />
        ))}
      </div>
    </section>
  );
}