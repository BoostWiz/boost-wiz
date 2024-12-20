import TotalScore from './TotalScore';
import HighLights from './HighLights';
import BattingStats from './BattingStats';
import PitchingStats from './PitchingStats';

const BoxScore = () => {
  // BoxScore 구조 => 전체스코어, 주요기록, 타자기록(KT, 상대팀), 투수기록(KT, 상대팀)
  return (
    <div className="container-default">
      <div className="border-t-[2px] border-primary">
        <TotalScore />
        <HighLights />
        <BattingStats teamName="KT" />
        <BattingStats teamName="상대팀" />
        <PitchingStats teamName="KT" />
        <PitchingStats teamName="상대팀" />
      </div>
    </div>
  );
};

export default BoxScore;
