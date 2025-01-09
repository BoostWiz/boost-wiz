'use client';

import BoxScore from '@/components/BoxScore';
import Banner from '@/shared/components/Banner';
import {
  getLatestGame,
  getBoxscore,
} from '@/api/game/boxscore/useGetBoxscoreData';
import { useState, useEffect } from 'react';
import { keyDataType, boxscoreType } from '@/interface/boxscore';
import { navData } from '@/shared/components/Header/constants';

interface PageProps {
  params: Promise<{
    params?: string[];
  }>;
}

export default function BoxScorePage({ params }: PageProps) {
  const [gameData, setGameData] = useState<keyDataType | null>(null);
  const [boxscoreData, setBoxscoreData] = useState<boxscoreType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
      const resolvedParams = await params;
      if (resolvedParams.params && resolvedParams.params.length > 0) {
        const extractedParams: keyDataType = {
          gameDate: resolvedParams.params[0],
          gmkey: resolvedParams.params[1],
        };
        setGameData(extractedParams);
      } else {
        getLatestGame().then(setGameData);
      }
    };

    initializeData();
  }, [params]);

  useEffect(() => {
    if (gameData) {
      getBoxscore(gameData)
        .then(setBoxscoreData)
        .finally(() => setIsLoading(false));
    }
  }, [gameData]);

  if (isLoading) return <div>로딩중</div>;
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="박스스코어"
          description="박스스코어 정보를 알려드립니다."
        />
      </div>
      {boxscoreData !== null ? (
        <BoxScore boxscoreData={boxscoreData} setGameData={setGameData} />
      ) : (
        <div>데이터를 불러오는 중</div>
      )}
    </section>
  );
}
