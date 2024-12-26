import GameInformationTitle from '../Game/GameInformationTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';

interface PitchingStatsProps {
  teamName: string;
  infos: any;
}

const PitchingStats = ({ teamName, infos }: PitchingStatsProps) => {
  const changeResult = (result: string) => {
    if (result === 'W') {
      return '승';
    }
    if (result === 'H') {
      return '홀드';
    }
    if (result === 'L') {
      return '패';
    }
    if (result === 'S') {
      return '세이브';
    }
  };
  return (
    <div className="pt-6">
      <GameInformationTitle titleText={`${teamName} 투수 기록`} />
      <div className="my-4">
        <Table className="text-sm text-center border border-[#ECEEF2]">
          <TableHeader className="[&_th]:h-10">
            <TableRow className="bg-[#ECEEF2]/80">
              <TableHead className="text-center border-r px-6">
                선수명
              </TableHead>
              <TableHead className="text-center border-r">등판</TableHead>
              <TableHead className="text-center border-r px-4">결과</TableHead>
              <TableHead className="text-center">승</TableHead>
              <TableHead className="text-center">패</TableHead>
              <TableHead className="text-center border-r">세</TableHead>
              <TableHead className="text-center border-r">이닝</TableHead>
              <TableHead className="text-center">타자</TableHead>
              <TableHead className="text-center">투구수</TableHead>
              <TableHead className="text-center">타수</TableHead>
              <TableHead className="text-center">피안타</TableHead>
              <TableHead className="text-center">피홈런</TableHead>
              <TableHead className="text-center">사구</TableHead>
              <TableHead className="text-center border-r">삼진</TableHead>
              <TableHead className="text-center">실점</TableHead>
              <TableHead className="text-center border-r">자책</TableHead>
              <TableHead className="text-center px-6">평균 자책점</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {infos.map((pitcher: any) => (
              <TableRow key={pitcher.name}>
                <TableCell className="p-1 border-r">{pitcher.name}</TableCell>
                <TableCell className="p-1 border-r">
                  {pitcher.changeinn}
                </TableCell>
                <TableCell className="p-1 border-r">
                  {changeResult(pitcher.wls)}
                </TableCell>
                <TableCell className="p-1">{pitcher.w}</TableCell>
                <TableCell className="p-1">{pitcher.l}</TableCell>
                <TableCell className="p-1 border-r">{pitcher.s}</TableCell>
                <TableCell className="p-1 border-r">{pitcher.inn}</TableCell>
                <TableCell className="p-1">{pitcher.pa}</TableCell>
                <TableCell className="p-1">{pitcher.bf}</TableCell>
                <TableCell className="p-1">{pitcher.ab}</TableCell>
                <TableCell className="p-1">{pitcher.hit}</TableCell>
                <TableCell className="p-1">{pitcher.hr}</TableCell>
                <TableCell className="p-1">{pitcher.bbhp}</TableCell>
                <TableCell className="p-1 border-r">{pitcher.kk}</TableCell>
                <TableCell className="p-1">{pitcher.r}</TableCell>
                <TableCell className="p-1 border-r">{pitcher.er}</TableCell>
                <TableCell className="p-1">
                  {pitcher.name === '합계'
                    ? ''
                    : ((pitcher.accmEr * 9) / pitcher.accmInn2).toFixed(3)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PitchingStats;
