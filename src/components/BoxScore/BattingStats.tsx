import GameInformationTitle from '../Game/GameInformationTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';

interface BattingStatsProps {
  teamName: string;
  infos: any;
  maxInning: number;
}

// 타자정보 컴포넌트
// todos: 타입 지정
const BattingStats = ({ teamName, infos, maxInning }: BattingStatsProps) => {
  return (
    <div className="pt-6">
      <GameInformationTitle titleText={`${teamName} 타자 기록`} />
      <div className="my-4">
        <Table className="text-sm text-center border border-[#ECEEF2]">
          <TableHeader className="[&_th]:h-10">
            <TableRow className="bg-[#ECEEF2]/80">
              <TableHead className="text-center px-0 border-r">타순</TableHead>
              <TableHead className="text-center px-1 border-r">
                포지션
              </TableHead>
              <TableHead className="text-center border-r">이름</TableHead>
              <TableHead className="text-center px-1">타수</TableHead>
              <TableHead className="text-center px-1">득점</TableHead>
              <TableHead className="text-center px-1">안타</TableHead>
              <TableHead className="text-center px-1 border-r">타점</TableHead>
              <TableHead className="text-center border-r">타율</TableHead>
              {Array.from({ length: maxInning }, (_, i) => (
                <TableHead key={i} className="text-center">
                  {i + 1}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {infos.map((batter: any) => (
              <TableRow key={batter.name}>
                <TableCell className="p-1 border-r">{batter.oneturn}</TableCell>
                <TableCell className="p-1 border-r">
                  {batter.position}
                </TableCell>
                <TableCell className="p-1 border-r">{batter.name}</TableCell>
                <TableCell className="p-1">{batter.ab}</TableCell>
                <TableCell className="p-1">{batter.run}</TableCell>
                <TableCell className="p-1">{batter.hit}</TableCell>
                <TableCell className="p-1 border-r">{batter.rbi}</TableCell>
                <TableCell className="p-1 border-r">
                  {batter.name === '합계'
                    ? ''
                    : (batter.accmHit / batter.accmAb).toFixed(3)}
                </TableCell>
                {Array.from({ length: maxInning }, (_, i) => (
                  <TableCell key={i} className="p-1">
                    {batter[`il${i + 1}`] !== ''
                      ? batter[`il${i + 1}`]
                      : batter[`inn${i + 1}`] !== ''
                        ? batter[`inn${i + 1}`]
                        : ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BattingStats;
