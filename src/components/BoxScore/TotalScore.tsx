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
import {
  scheduleInfoType,
  scoreboardType,
  keyDataType,
} from '@/interface/boxscore';

// 박스스코어 제일 위에 위치한 경기 정보 요약이 들어가는 컴포넌트
// todos: 타입 지정, (승리,패전)/(선발) 투수 정보

interface propsType {
  schedule: {
    current: scheduleInfoType;
    next: scheduleInfoType;
    prev: scheduleInfoType;
  };
  scoreboard: scoreboardType[];
  maxInning: number;
  setGameData: React.Dispatch<React.SetStateAction<keyDataType | null>>;
}

const TotalScore = ({
  schedule,
  scoreboard,
  maxInning,
  setGameData,
}: propsType) => {
  // 게임 날짜 나눠서 출력하는 함수
  const formatGameDate = (gameDate: number) => {
    const date = String(gameDate);
    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
  };

  const handleClickNextButton = () => {
    if (schedule.next == undefined) {
      return;
    }
    setGameData({
      gameDate: String(schedule.next.gameDate),
      gmkey: schedule.next.gmkey,
    });
  };

  return (
    <div className={`${flexRow} h-[250px] bg-[#ECEEF2]/50`}>
      {/* 전날 경기 */}
      <div
        onClick={() =>
          setGameData({
            gameDate: String(schedule.prev.gameDate),
            gmkey: schedule.prev.gmkey,
          })
        }
        className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%] hover:cursor-pointer`}
      >
        <ChevronLeft size={50} />
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[90%] w-[80%]`}>
        <div className={`${flexRowCenter} h-[45%] w-full`}>
          {/* 첫번째팀 정보 */}
          <div className={`${flexRowCenter} w-[35%] h-full`}>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-4xl font-bold mt-4">{schedule.current.home}</p>
              <p className="text-sm text-gray">(홈)</p>
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
              <p className="text-4xl font-bold mt-4">
                {schedule.current.visit}
              </p>
              <p className="text-sm text-gray">(원정)</p>
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
              {scoreboard.map((team: any, idx) => (
                <TableRow key={idx}>
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
      <div
        onClick={() => handleClickNextButton()}
        className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%] ${schedule.next == undefined ? '' : 'hover:cursor-pointer'} `}
      >
        <ChevronRight
          size={50}
          className={schedule.next == undefined ? 'stroke-gray' : ''}
        />
      </div>
    </div>
  );
};

export default TotalScore;
