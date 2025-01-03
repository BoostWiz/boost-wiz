'use client';

import { flexColumnCenter } from '@/styles/flex';
import CardSchedule from './CardSchedule';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import useGetSchedule from '@/api/game/useGetSchedule';
import { ScheduleType } from '@/interface/game';

const CardScheduleList = () => {
  const { scheduleList } = useGetSchedule();

  const defaultCardNum = 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState<ScheduleType[] | null[]>([]);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = useCallback(() => {
    if (currentIndex < scheduleList.length - defaultCardNum) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [scheduleList, currentIndex]);

  useEffect(() => {
    if (scheduleList) {
      const slicedData = scheduleList.slice(
        currentIndex,
        currentIndex + defaultCardNum,
      );

      const parsingData = [
        ...slicedData,
        ...Array(defaultCardNum - slicedData.length).fill(null),
      ] as ScheduleType[];

      setCarouselData(parsingData);
    }
  }, [scheduleList, currentIndex]);

  return (
    <div className={`flex sm:flex-row flex-col relative`}>
      <div
        className={`${flexColumnCenter} ${
          currentIndex === 0 ? 'hidden' : 'visible'
        } absolute top-1/2 left-[-84px] sm:left-[-42px] w-[36px] h-[36px] rounded-full bg-turquoise z-20 cursor-pointer`}
        onClick={handleLeftClick}
      >
        <Image
          src={'/common/left_arrow.svg'}
          alt="left arrow"
          width={8}
          height={8}
        />
      </div>

      {carouselData.map((data: ScheduleType | null, idx) => {
        return (
          <CardSchedule
            key={`${data?.gmkey}-${idx}`}
            isCenter={idx % 2 !== 0}
            data={data}
          />
        );
      })}
      <div
        className={`${flexColumnCenter} ${
          currentIndex >= scheduleList?.length - defaultCardNum
            ? 'hidden'
            : 'visible'
        } absolute top-1/2 right-[-84px] sm:right-[-42px] w-[36px] h-[36px] rounded-full bg-turquoise z-20 cursor-pointer`}
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
