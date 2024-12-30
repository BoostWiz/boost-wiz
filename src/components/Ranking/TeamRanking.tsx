import SeasonTeamRanking from './Team/SeasonTeamRanking';
import SeasonTeamRecord from './Team/SeasonTeamRecord';
import SeasonTeamPitcherRecord from './Team/SeasonTeamPitcherRecord';
import SeasonTeamBatterRecord from './Team/SeasonTeamBatterRecord';
import SeasonTeamVsRecord from './Team/SeasonTeamVsRecord';

const TeamRanking = () => {
  return (
    <div className="w-full mt-4">
      <SeasonTeamRanking />
      <SeasonTeamRecord />
      <SeasonTeamPitcherRecord />
      <SeasonTeamBatterRecord />
      <SeasonTeamVsRecord />
    </div>
  );
};

export default TeamRanking;
