'use client';

import Point from '@/components/Point';
import { useState, useEffect } from 'react';
import { getPointData } from '@/api/game/point/getPointData';
import { getLatestGame } from '@/api/game/boxscore/useGetBoxscoreData';
import { pointType } from '@/interface/point';
import { keyDataType } from '@/interface/boxscore';
import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function PointPage() {
  const [gameData, setGameData] = useState<keyDataType | null>(null);
  const [pointData, setPointData] = useState<pointType | null>(null);

  const fetchPointData = async (gameInfo: keyDataType) => {
    setPointData(await getPointData(gameInfo));
  };

  useEffect(() => {
    getLatestGame().then(setGameData);
  }, []);

  useEffect(() => {
    if (gameData !== null) {
      fetchPointData(gameData);
    }
  }, [gameData]);

  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="순위기록"
          description="kt wiz 정규리그 기록을 알려 드립니다."
          navData={navData['game'].items}
        />
      </div>
      {pointData !== null ? (
        <Point pointData={pointData} setGameData={setGameData} />
      ) : (
        <div>로딩중입니다.</div>
      )}
    </section>
  );
}
