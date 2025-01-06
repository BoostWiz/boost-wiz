import SeasonTeamRanking from './Team/SeasonTeamRanking';
import SeasonTeamRecord from './Team/SeasonTeamRecord';
import SeasonTeamPitcherRecord from './Team/SeasonTeamPitcherRecord';
import SeasonTeamBatterRecord from './Team/SeasonTeamBatterRecord';
import SeasonTeamVsRecord from './Team/SeasonTeamVsRecord';
import { useState, useEffect } from 'react';
import {
  getSeasonTeamRanking,
  getSeasonTeamData,
  getSeasonPitcherData,
  getSeasonBatterData,
  getSeasonVSData,
} from '@/api/game/ranking/useGetRanking';
import {
  teamRankingType,
  teamDataType,
  seasonPitcherDataType,
  seasonBatterDataType,
  seasonVSDataType,
} from '@/interface/ranking';

const TeamRanking = () => {
  const [seasonTeamRank, setSeasonTeamRank] = useState<teamRankingType[]>([]);
  const [teamData, setTeamData] = useState<teamDataType[]>([]);
  const [pitcherData, setPitcherData] = useState<seasonPitcherDataType[]>([]);
  const [batterData, setBatterData] = useState<seasonBatterDataType[]>([]);
  const [vsData, setVSData] = useState<seasonVSDataType[]>([]);
  const getRankData = async () => {
    setSeasonTeamRank(await getSeasonTeamRanking());
  };
  const getTeamData = async () => {
    setTeamData(await getSeasonTeamData());
  };
  const getPitcherData = async () => {
    setPitcherData(await getSeasonPitcherData());
  };
  const getBatterData = async () => {
    setBatterData(await getSeasonBatterData());
  };
  const getVSData = async () => {
    setVSData(await getSeasonVSData());
  };

  useEffect(() => {
    getRankData();
    getTeamData();
    getPitcherData();
    getBatterData();
    getVSData();
  }, []);

  return (
    <div className="w-full mt-4">
      <SeasonTeamRanking teamRankingData={seasonTeamRank} />
      <SeasonTeamRecord seasonTeamData={teamData} />
      <SeasonTeamPitcherRecord pitcherData={pitcherData} />
      <SeasonTeamBatterRecord batterData={batterData} />
      <SeasonTeamVsRecord vsData={vsData} />
    </div>
  );
};

export default TeamRanking;
