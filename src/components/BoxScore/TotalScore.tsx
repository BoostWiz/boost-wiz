import { flexColumnCenter, flexRow, flexRowCenter } from '@/styles/flex';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';

// 박스스코어 제일 위에 위치한 경기 정보 요약이 들어가는 컴포넌트
// todos: 타입 지정, (승리,패전)/(선발) 투수 정보

interface propsType {
  schedule: any;
  scoreboard: any;
}

const TotalScore = ({ schedule, scoreboard }: propsType) => {
  // 게임 날짜 나눠서 출력하는 함수
  const formatGameDate = (gameDate: any) => {
    const date = String(gameDate);
    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
  };

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

  const maxInning = getMaxInnings(scoreboard);

  return (
    <div className={`${flexRow} h-[250px] bg-[#ECEEF2]/50`}>
      {/* 전날 경기 */}
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronLeft size={50} />
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[90%] w-[80%]`}>
        <div className={`${flexRowCenter} h-[45%] w-full`}>
          {/* 첫번째팀 정보 */}
          <div className={`${flexRowCenter} w-[35%] h-full`}>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-2xl font-bold">{schedule.current.home}</p>
              <p className="text-sm">승 - 김민</p>
            </div>
            <div className="w-[30%] text-center">
              <img src={schedule.current.homeLogo} />
            </div>
            <div className="w-[30%] text-center font-bold text-5xl">
              {schedule.current.hscore}
            </div>
          </div>
          {/* 경기장, 경기일자 */}
          <div
            className={`${flexColumnCenter} w-[15%] h-full text-center text-sm`}
          >
            <p>{formatGameDate(schedule.current.gameDate)}</p>
            <p>{schedule.current.stadium}</p>
          </div>
          {/* 두번째 팀 정보 */}
          <div className={`${flexRowCenter} w-[35%] h-full`}>
            <div className="w-[30%] text-center font-bold text-5xl">
              {schedule.current.vscore}
            </div>
            <div className="w-[30%] text-center">
              <img src={schedule.current.visitLogo} />
            </div>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-2xl font-bold">{schedule.current.visit}</p>
              <p className="text-sm">패 - 최원태</p>
            </div>
          </div>
        </div>
        <div className="h-[50%] w-[65%] overflow-x-auto mt-2">
          <Table className="w-full text-sm border-collapse text-center [&_tr]:!h-8 [&_th]:!h-8 [&_td]:!h-8">
            <TableHeader>
              <TableRow>
                <TableHead className="p-1 bg-[#D60C0C] text-white text-center w-20">
                  팀
                </TableHead>
                {Array.from({ length: maxInning }, (_, i) => (
                  <TableHead
                    key={i}
                    className="p-1 bg-[#D60C0C] text-white text-center w-10"
                  >
                    {i + 1}
                  </TableHead>
                ))}
                {/* 구분용 빈 컬럼 */}
                <TableHead className="p-1 bg-[#D60C0C] w-3"></TableHead>
                {['R', 'H', 'E', 'B'].map((header) => (
                  <TableHead
                    key={header}
                    className="p-1 bg-[#D60C0C] text-white text-center w-10"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {/* 타입 수정 필요함 */}
              {scoreboard.map((team: any) => (
                <TableRow key={team}>
                  <TableCell className="p-1 whitespace-nowrap w-20">
                    {team.bhomeName}
                  </TableCell>
                  {Array.from({ length: maxInning }, (_, i) => (
                    <TableCell key={i} className="p-1 w-10">
                      {team[`score${i + 1}`]}
                    </TableCell>
                  ))}
                  {/* 구분용 빈 컬럼 */}
                  <TableCell className="p-1 w-3"></TableCell>
                  <TableCell className="p-1 w-10 text-center">
                    {team.run}
                  </TableCell>
                  <TableCell className="p-1 w-10 text-center">
                    {team.hit}
                  </TableCell>
                  <TableCell className="p-1 w-10 text-center">
                    {team.error}
                  </TableCell>
                  <TableCell className="p-1 w-10 text-center">
                    {team.ballfour}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* 다음 경기 */}
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronRight size={50} />
      </div>
    </div>
  );
};

export default TotalScore;
