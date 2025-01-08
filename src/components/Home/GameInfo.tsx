'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GameInfo() {
  const [gameData, setGameData] = useState<any>(null); // 게임 데이터를 저장
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [selectedGame, setSelectedGame] = useState<any>(null); // 선택된 게임

  useEffect(() => {
    const fetchGameData = async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await axios.get(`${BASE_URL}/api/game/recentGames`);
        const data = response.data.data;
        setGameData(data);
        setSelectedGame(data.current); // 초기 선택된 게임 설정
      } catch (error) {
        console.error('Failed to fetch game data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  const handlePrevGame = () => {
    if (gameData?.prev) {
      setSelectedGame(gameData.prev); // 이전 게임 데이터로 상태 변경
    }
  };

  const handleNextGame = () => {
    if (gameData?.current) {
      setSelectedGame(gameData.current); // 현재 게임 데이터로 상태 변경
    }
  };

  if (loading) {
    return <div>Loading game information...</div>;
  }

  if (!selectedGame) {
    return <div>No game information available.</div>;
  }

  return (
    <div className="flex flex-col w-[585px] h-[222px] gap-[18px] bg-white">
      <div className="flex w-full h-[55px] pb-[11px] border-b border-[#eceef2]">
        {/* 첫 번째 버튼 */}
        <button
          className="flex-none w-[24px] h-[24px] mt-[13px]"
          style={{
            backgroundImage: "url('/images/home/arrow-prev.svg')",
          }}
          onClick={handlePrevGame}
        ></button>
        {/* 두 번째 요소: div로 영역 차지 */}
        <div className="flex flex-col w-[537px] h-full justify-between items-center">
          {/* 날짜 텍스트 */}
          <span className="text-lg text-darkBrown">
            {selectedGame.displayDate.slice(0, 4)}.
            {selectedGame.displayDate.slice(4, 6)}.
            {selectedGame.displayDate.slice(6)}
          </span>
          {/* 장소와 시간 */}
          <span className="text-sm text-gray">
            {selectedGame.stadium} {selectedGame.gtime}
          </span>
        </div>
        {/* 세 번째 버튼 */}
        <button
          className="flex-none w-[24px] h-[24px] mt-[13px]"
          style={{
            backgroundImage: "url('/images/home/arrow-next.svg')",
          }}
          onClick={handleNextGame}
        ></button>
      </div>

      <div className="flex w-full h-[149.5px]">
        <div className="flex-none flex flex-col items-center w-[131.5px] h-full">
          <img
            src={selectedGame.visitLogo}
            alt="home team logo"
            className="w-[100px] h-[100px]"
          />
          <span className="text-lg text-darkBrown">
            {selectedGame.visitKey}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="flex w-[232.25px] h-[94px] justify-center gap-[25px]">
            <span className="text-[64px] text-darkBrown">
              {selectedGame.visitScore}
            </span>
            <span className="w-[16.25px] h-[94px] text-[50px] text-gray">
              :
            </span>
            <span className="text-[64px] text-darkBrown">
              {selectedGame.homeScore}
            </span>
          </div>
          <div className="w-[92px] h-[27px] self-center flex justify-center items-center bg-gray rounded-[6px] cursor-pointer">
            <span className="text-[13px] text-white">경기정보</span>
            <img
              src={'/images/home/arrow-next-white.svg'}
              alt="arrow-next-white"
              className="w-[18px] h-[18px]"
            ></img>
          </div>
        </div>
        <div className="flex-none flex flex-col items-center w-[131.5px] h-full">
          <img
            src={selectedGame.homeLogo}
            alt="home team logo"
            className="w-[100px] h-[100px]"
          />
          <span className="text-lg text-darkBrown">{selectedGame.homeKey}</span>
        </div>
      </div>
    </div>
  );
}
