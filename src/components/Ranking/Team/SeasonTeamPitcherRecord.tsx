import GameInformationTitle from '../../Game/GameInformationTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { seasonPitcherDataType } from '@/interface/ranking';

interface propsType {
  pitcherData: seasonPitcherDataType[];
}

const SeasonTeamPitcherRecord = ({ pitcherData }: propsType) => {
  const headerContents = [
    '팀명',
    '희타',
    '희비',
    '볼넷',
    '고의4구',
    '사구',
    '탈삼진',
    '폭투',
    '보크',
    '실점',
    '자책점',
    '블론세이브',
    'WHIP',
    '피안타율',
    'QS',
  ];

  return (
    <div className="my-6">
      <GameInformationTitle titleText="2024 시즌 팀 투수 기록" />
      <div className="w-full p-2 my-2">
        <Table className="text-sm text-center border-t border-t-[#D60C0C] border-t-2">
          <TableHeader>
            <TableRow>
              {headerContents.map((headerName) => (
                <TableHead
                  key={headerName}
                  className={`${headerName === '팀명' || headerName === '블론세이브' ? 'w-14' : 'w-10'} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
                >
                  {headerName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pitcherData.map((teamData: any) => (
              <TableRow
                key={teamData.teamName}
                className={`hover:bg-[#ECEEF2]/30 ${teamData.teamName === 'KT' ? 'text-[#D60C0C]' : ''}`}
              >
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.teamName}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.sh}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.sf}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bb}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.ib}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bbhp}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.kk}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.wp}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bk}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.r}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.er}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.bs}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.whip}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.oavg}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.qs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SeasonTeamPitcherRecord;
