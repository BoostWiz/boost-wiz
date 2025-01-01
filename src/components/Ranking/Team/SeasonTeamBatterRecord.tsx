import GameInformationTitle from '@/components/Game/GameInformationTitle';
import seasonBatterData from '@/mocks/data/teamBatterRanking.json';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';

// todo: 타입지정, api 연결
const SeasonTeamBatterRecord = () => {
  const batterData: any = seasonBatterData.data.list;
  const headerContents = [
    '팀명',
    '안타',
    '2루타',
    '3루타',
    '홈런',
    '타점',
    '도루',
    '볼넷',
    '고의4구',
    '사구',
    '삼진',
    '병살',
    '장타율',
    '출루율',
    '실책',
    'OPS',
    '타율',
  ];

  return (
    <div className="my-6">
      <GameInformationTitle titleText="2024 시즌 팀 타자 기록" />
      <div className="w-full p-2 my-2">
        <Table className="text-sm text-center border-t border-t-[#D60C0C] border-t-2">
          <TableHeader>
            <TableRow>
              {headerContents.map((headerName) => (
                <TableHead
                  key={headerName}
                  className={`${headerName === '팀명' ? 'w-14' : 'w-10'} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
                >
                  {headerName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {batterData.map((teamData: any) => (
              <TableRow
                key={teamData.teamName}
                className={`hover:bg-[#ECEEF2]/30 ${teamData.teamName === 'KT' ? 'text-[#D60C0C]' : ''}`}
              >
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.teamName}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.hit}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.h2}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.h3}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.hr}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.rbi}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.sb}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bb}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.ib}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.hp}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.kk}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.gd}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.slg}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bra}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.err}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.ops}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.hra}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SeasonTeamBatterRecord;
