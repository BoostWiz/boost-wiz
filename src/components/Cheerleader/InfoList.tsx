'use client';

import useGetPlayer from '@/api/player/useGetPlayer';
import { CheerleaderType } from '@/interface/player';
import { flexColumn, flexRow } from '@/styles/flex';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const InfoList = () => {
  const { players } = useGetPlayer('cheerleader');
  const [cheerleader, setCheerLeaders] = useState<CheerleaderType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 6;

  const handleNext = () => {
    if (players && currentIndex + 1 <= players.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visiblePlayers = useMemo(() => {
    return players.slice(currentIndex, currentIndex + itemsToShow);
  }, [players]);

  useEffect(() => {
    if (players) {
      setCheerLeaders(players[0]);
    }
  }, [players]);

  return (
    <section className="w-[1100px]">
      {cheerleader !== null && (
        <div className="relative">
          <Image
            src={cheerleader.titleImgPath}
            width={1100}
            height={365}
            alt={`bg-${cheerleader.leaderName}`}
          />
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2">
            <div className={`${flexColumn} gap-2 mb-2`}>
              <span className="text-primary">응원단장</span>
              <h1 className="text-title">{cheerleader.leaderName}</h1>
              <span>{cheerleader.leaderEngName}</span>
            </div>
            <div className={`${flexColumn} gap-2 text-sm`}>
              <div className={`${flexRow}`}>
                <div className="w-[100px]">별명</div>
                <span>{cheerleader.leaderNickName}</span>
              </div>
              <div className={`${flexRow}`}>
                <div className="w-[100px]">키/혈액형</div>
                <span>
                  {cheerleader.leaderHeight}cm/{cheerleader.leaderBloodGroups}형
                </span>
              </div>
              <div className={`${flexRow}`}>
                <div className="w-[100px]">취미</div>
                <span>{cheerleader.leaderHobby}</span>
              </div>
              <div className={`${flexRow}`}>
                <div className="w-[100px]">좋아하는 선수</div>
                <span>{cheerleader.leaderLikePlayer}</span>
              </div>
              <div className={`${flexRow}`}>
                <div className="w-[100px]">좌우명</div>
                <span>{cheerleader.leaderMotto}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`${flexRow} justify-between items-center mt-4`}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ◀
        </button>
        {visiblePlayers &&
          cheerleader &&
          visiblePlayers.map((p: CheerleaderType) => {
            const currentViewLeader = cheerleader.imgPath === p.imgPath;
            return (
              <div
                className={`cursor-pointer ${
                  currentViewLeader && 'border-[2px]  border-primary'
                }`}
                onClick={() => setCheerLeaders(p)}
              >
                <Image
                  src={currentViewLeader ? p.thumbOnImgPath : p.thumbOffImgPath}
                  width={183}
                  height={178}
                  alt={p.leaderName}
                />
              </div>
            );
          })}
        <button
          onClick={handleNext}
          disabled={players && currentIndex + itemsToShow >= players.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default InfoList;
