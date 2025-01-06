import GameInformationTitle from '@/components/Game/GameInformationTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { teamDataType } from '@/interface/ranking';

// 팀순위/2024 시즌 전체 팀 기록이들어감
interface propsType {
  seasonTeamData: teamDataType[];
}
const SeasonTeamRecord = ({ seasonTeamData }: propsType) => {
  const headerContents = [
    '순위',
    '팀명',
    '경기 수',
    '승',
    '패',
    '무',
    '승률',
    '타수',
    '연속',
    '출루율',
    '장타율',
    '타율',
    '자책점',
    '득점',
    '실점',
    '홈런',
  ];

  return (
    <div className="my-6">
      <GameInformationTitle titleText="2024 시즌 팀 기록" />
      <div className="w-full p-2 my-2">
        <Table className="text-sm text-center border-t border-t-[#D60C0C] border-t-2">
          <TableHeader>
            <TableRow>
              {headerContents.map((headerName) => (
                <TableHead
                  key={headerName}
                  className="p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]"
                >
                  {headerName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {seasonTeamData.map((teamData: any) => (
              <TableRow
                key={teamData.teamName}
                className={`hover:bg-[#ECEEF2]/30 ${teamData.teamName === 'KT' ? 'text-[#D60C0C]' : ''}`}
              >
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.rank}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.teamName}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.game}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.win}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.lose}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.drawn}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.wra}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.ab}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.continue1}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bra}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.lra}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.hra}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.er}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.run}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.r}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.hr}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SeasonTeamRecord;
