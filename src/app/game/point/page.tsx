'use client';

import Point from '@/components/Point';
import { useState, useEffect } from 'react';
import { getPointData } from '@/api/game/point/getPointData';
import { getLatestGame } from '@/api/game/boxscore/useGetBoxscoreData';
import { pointType } from '@/interface/point';
import { keyDataType } from '@/interface/boxscore';

// todos: banner 수정
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
        {/* <Banner
          title="박스스코어"
          description="박스스코어 정보를 알려드립니다."
        /> */}
      </div>
      {pointData !== null ? (
        <Point pointData={pointData} setGameData={setGameData} />
      ) : (
        <div>로딩중입니다.</div>
      )}
    </section>
  );
}
