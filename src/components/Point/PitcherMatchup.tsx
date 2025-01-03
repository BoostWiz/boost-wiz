import GameInformationTitle from '../Game/GameInformationTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { lineupPitcher } from '@/interface/point';

interface propsType {
  homeName: string;
  visitName: string;
  homePitcher: lineupPitcher;
  visitPitcher: lineupPitcher;
}

const PitcherMatchup = ({
  homeName,
  visitName,
  homePitcher,
  visitPitcher,
}: propsType) => {
  const headerContents = [
    '팀',
    '이름',
    '평균자책점',
    '경기',
    '승',
    '패',
    '세',
    '홀',
    '승률',
    '이닝',
    '피안타',
    '피홈런',
    '볼넷',
    '사구',
    '삼진',
    '실점',
    '자책점',
  ];
  return (
    <div className="w-full my-10">
      <GameInformationTitle titleText="선발투수 비교" />
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            {headerContents.map((headerName) => (
              <TableHead
                key={headerName}
                className={`${
                  headerName === '평균자책점' ||
                  headerName === '이닝' ||
                  headerName === '이름' ||
                  headerName === '팀'
                    ? 'w-16'
                    : 'w-10'
                } p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
              >
                {headerName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            className={`${homeName === 'KT' ? 'bg-[#fff5f7] text-[#D60C0C]' : ''}`}
          >
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homeName}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.playerName}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.era}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.gamenum}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.w}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.l}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.sv}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.hold}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.wra}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.innDisplay}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.hit}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.hr}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.bb}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.hp}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.kk}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.r}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {homePitcher.er}
            </TableCell>
          </TableRow>
          <TableRow
            className={`${visitName === 'KT' ? 'bg-[#fff5f7] text-[#D60C0C]' : ''}`}
          >
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitName}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.playerName}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.era}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.gamenum}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.w}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.l}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.sv}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.hold}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.wra}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.innDisplay}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.hit}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.hr}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.bb}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.hp}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.kk}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.r}
            </TableCell>
            <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
              {visitPitcher.er}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PitcherMatchup;
