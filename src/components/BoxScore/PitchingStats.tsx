import GameInformationTitle from '../Game/GameInformationTitle';

interface PitchingStatsProps {
  teamName: string;
}

const PitchingStats = ({ teamName }: PitchingStatsProps) => {
  return (
    <div className="pt-6">
      <GameInformationTitle titleText={`${teamName} 투수 기록`} />
      <div className="my-2 h-[300px] border">
        투수 기록 정보 들어갈 자리(표)
      </div>
    </div>
  );
};

export default PitchingStats;
