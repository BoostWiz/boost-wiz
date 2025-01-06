import SeasonTeamRanking from './Team/SeasonTeamRanking';
import SeasonTeamRecord from './Team/SeasonTeamRecord';
import SeasonTeamPitcherRecord from './Team/SeasonTeamPitcherRecord';
import SeasonTeamBatterRecord from './Team/SeasonTeamBatterRecord';
import SeasonTeamVsRecord from './Team/SeasonTeamVsRecord';
import { useState, useEffect } from 'react';
import { getSeasonTeamRanking } from '@/api/game/ranking/useGetRanking';
import { teamRankingType } from '@/interface/ranking';

const TeamRanking = () => {
  const [seasonTeamRank, setSeasonTeamRank] = useState<teamRankingType[]>([]);
  const getRankData = async () => {
    setSeasonTeamRank(await getSeasonTeamRanking());
  };
  useEffect(() => {
    getRankData();
  }, []);
  return (
    <div className="w-full mt-4">
      <SeasonTeamRanking teamRankingData={seasonTeamRank} />
      <SeasonTeamRecord />
      <SeasonTeamPitcherRecord />
      <SeasonTeamBatterRecord />
      <SeasonTeamVsRecord />
    </div>
  );
};

export default TeamRanking;
