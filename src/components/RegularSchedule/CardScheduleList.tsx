'use client';

import { flexColumnCenter, flexRow } from '@/styles/flex';
import CardSchedule from './CardSchedule';
import Image from 'next/image';
import { useState } from 'react';
import { cardDummyData } from './CardDummyData';

export interface ScheduleDataProps {
  date: string;
  loseTeam: {
    logo: string;
    name: string;
    starting: string;
    score: number;
  };
  winTeam: {
    logo: string;
    name: string;
    starting: string;
    score: number;
  };
  routerInfo: string;
}

const CardScheduleList = () => {
  const defaultCardNum = 3;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < cardDummyData.length - defaultCardNum) {
      setCurrentIndex(currentIndex + 1); // 오른쪽 버튼 클릭 시 첫 번째 카드 인덱스를 증가
    }
  };

  const slicedData = cardDummyData.slice(
    currentIndex,
    currentIndex + defaultCardNum,
  );

  const scheduleData = [
    ...slicedData,
    ...Array(defaultCardNum - slicedData.length).fill(null),
  ];

  return (
    <div className={`${flexRow} relative`}>
      <div
        className={`${flexColumnCenter} ${
          currentIndex === 0 ? 'hidden' : 'visible'
        } absolute top-1/2 left-[-42px] w-[36px] h-[36px] rounded-full bg-turquoise z-20 cursor-pointer`}
        onClick={handleLeftClick}
      >
        <Image
          src={'/common/left_arrow.svg'}
          alt="left arrow"
          width={8}
          height={8}
        />
      </div>

      {scheduleData.map((data: ScheduleDataProps, idx) => {
        return (
          <CardSchedule
            key={`${data.date}-${idx}`}
            isCenter={idx % 2 !== 0}
            data={data}
          />
        );
      })}
      <div
        className={`${flexColumnCenter} ${
          currentIndex >= cardDummyData.length - defaultCardNum
            ? 'hidden'
            : 'visible'
        } absolute top-1/2 right-[-42px] w-[36px] h-[36px] rounded-full bg-turquoise z-20 cursor-pointer`}
        onClick={handleRightClick}
      >
        <Image
          src={'/common/right_arrow.svg'}
          alt="right arrow"
          width={8}
          height={8}
        />
      </div>
    </div>
  );
};

export default CardScheduleList;
