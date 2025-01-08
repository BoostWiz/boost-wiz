'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface TeamRankData {
  rank: number;
  wldName: string;
  game: number;
  wra: string;
}

export default function TeamRank() {
  const [teamRank, setTeamRank] = useState<TeamRankData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamRank = async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

      try {
        const res = await axios.get(`${BASE_URL}/api/game/ktwizteamrank`);
        const data = res.data.data.ktWizTeamRank;
        setTeamRank({
          rank: data.rank,
          wldName: data.wldName,
          game: data.game,
          wra: data.wra,
        });
      } catch (error) {
        console.error('Failed to fetch team rank:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamRank();
  }, []);

  if (loading) {
    return <div>Loading team rank...</div>;
  }

  if (!teamRank) {
    return <div>No team rank data available.</div>;
  }

  return (
    <div className="flex w-[473px] h-[96px] ml-[50px] my-auto">
      {/* 팀 순위 */}
      <div className="flex flex-col width-[79px] h-full items-start justify-end">
        <span className="text-lightGray text-xs mb-2">팀 순위</span>
        <div className="flex items-baseline gap-1">
          <span className="text-[62px] text-white leading-[1]">
            {teamRank.rank}
          </span>
          <span className="text-[18px] text-white leading-[1]">위</span>
        </div>
      </div>

      {/* 경기 결과 */}
      <div className="flex flex-col width-[164px] ml-[30px] h-full justify-end">
        <div className="flex gap-[4px] text-[24px] text-white">
          <span>{teamRank.wldName}</span>
        </div>
        <span className="text-[14px] text-white">
          총 {teamRank.game}경기, 승률 {teamRank.wra}
        </span>
      </div>
    </div>
  );
}
