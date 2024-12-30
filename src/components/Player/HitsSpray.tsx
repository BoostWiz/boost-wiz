import useGetPlayerAdditionalInfo from '@/api/player/useGetPlayerAdditionalInfo';
import {
  CourseType,
  HitsSprayCourseData,
  PlayerDetailType,
} from '@/interface/player';
import Image from 'next/image';
import { useState } from 'react';

interface HitsSprayProps {
  playerName: string;
  playerDetailType: PlayerDetailType;
}

const HitsSprayDataComponent = ({
  hitsSpray,
}: {
  hitsSpray: HitsSprayCourseData;
}) => {
  const [viewTooltip, setViewTooltip] = useState('');

  return Object.entries(hitsSpray).map(([type, value]) => {
    return value.map((v: CourseType) => {
      const { left, top } = v.style
        .split(';')
        .filter(Boolean)
        .reduce((acc, curr) => {
          const [key, value] = curr.split(':').map((str) => str.trim());

          if (key && value) {
            acc[key] = value;
          }
          return acc;
        }, {} as { [key: string]: string });

      let bgColor = '';
      switch (type) {
        case 'course double':
          bgColor = 'bg-deepBrown';
          break;
        case 'course home_run':
          bgColor = 'bg-primary';
          break;
        case 'course single':
          bgColor = 'turquoise';
          break;
        case 'course triple':
          bgColor = 'charcoalBlack';
          break;
      }

      return (
        <div key={`${v.style}`}>
          <div
            className="absolute text-caption"
            style={{ left: left, top: top }}
          >
            {viewTooltip === v.style && v.info}
          </div>
          <span
            className={`absolute w-2 h-2 rounded-full cursor-pointer ${bgColor}`}
            style={{ left, top }}
            onMouseEnter={() => setViewTooltip(v.style)}
            onMouseLeave={() => setViewTooltip('')}
          />
        </div>
      );
    });
  });
};

const HitsSpray = ({ playerName, playerDetailType }: HitsSprayProps) => {
  const { additionalInfo: hitsSpray }: { additionalInfo: HitsSprayCourseData } =
    useGetPlayerAdditionalInfo('KT', playerName, playerDetailType);

  return (
    <div className="relative">
      <Image
        src={'/common/groundxy.png'}
        width={336}
        height={365}
        alt="그라운드 이미지"
      />

      {hitsSpray && <HitsSprayDataComponent hitsSpray={hitsSpray} />}
    </div>
  );
};

export default HitsSpray;
