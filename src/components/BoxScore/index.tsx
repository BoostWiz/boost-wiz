import TotalScore from './TotalScore';
import HighLights from './HighLights';
import BattingStats from './BattingStats';
import PitchingStats from './PitchingStats';

// todos: boxscoreData 타입 지정하기
const BoxScore = ({ boxscoreData }: any) => {
  // BoxScore 구조 => 전체스코어, 주요기록, 타자기록(KT, 상대팀), 투수기록(KT, 상대팀)

  function checkKTIsHome(scheduleData: any) {
    if (scheduleData.current.home === 'KT') {
      return true;
    } else return false;
  }

  const isHome = checkKTIsHome(boxscoreData.schedule);
  const opponentTeamName = isHome
    ? boxscoreData.schedule.current.visit
    : boxscoreData.schedule.current.home;

  // 연장 갔는지 체크하는 함수
  const checkExtraInnings = (scoreData: any) => {
    // 10회부터 12회까지 확인
    for (let i = 10; i <= 12; i++) {
      // 홈팀이나 원정팀 중 하나라도 점수가 있으면 ('-'가 아니면)
      if (
        scoreData[0][`score${i}`] !== '-' ||
        scoreData[1][`score${i}`] !== '-'
      ) {
        return true; // 연장전
      }
    }
    return false; // 연장전 아님
  };

  // 이닝 수 결정 함수
  const getMaxInnings = (scoreData: any) => {
    return checkExtraInnings(scoreData) ? 12 : 9;
  };

  const maxInning = getMaxInnings(boxscoreData.scoreboard);

  return (
    <div className="container-default">
      <div className="border-t-[2px] border-primary">
        <TotalScore
          schedule={boxscoreData.schedule}
          scoreboard={boxscoreData.scoreboard}
          maxInning={maxInning}
        />
        <HighLights highLightInfo={boxscoreData.etcgames} />
        <BattingStats
          teamName="KT"
          infos={isHome ? boxscoreData.hbatters : boxscoreData.vbatters}
          maxInning={maxInning}
        />
        <BattingStats
          teamName={opponentTeamName}
          infos={isHome ? boxscoreData.vbatters : boxscoreData.hbatters}
          maxInning={maxInning}
        />
        <PitchingStats
          teamName="KT"
          infos={isHome ? boxscoreData.hpitchers : boxscoreData.vpitchers}
        />
        <PitchingStats
          teamName={opponentTeamName}
          infos={isHome ? boxscoreData.vpitchers : boxscoreData.hpitchers}
        />
      </div>
    </div>
  );
};

export default BoxScore;
