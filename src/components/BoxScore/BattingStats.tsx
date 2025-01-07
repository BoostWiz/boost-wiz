import GameInformationTitle from '../Game/GameInformationTitle';

interface BattingStatsProps {
  teamName: string;
}

const BattingStats = ({ teamName }: BattingStatsProps) => {
  return (
    <div className="pt-6">
      <GameInformationTitle titleText={`${teamName} 타자 기록`} />
      <div className="my-2 h-[300px] border">
        타자 기록 정보 들어갈 자리(표)
      </div>
    </div>
  );
};

export default BattingStats;
