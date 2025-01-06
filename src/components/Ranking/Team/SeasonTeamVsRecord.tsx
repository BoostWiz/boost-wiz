import GameInformationTitle from '@/components/Game/GameInformationTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { seasonVSDataType } from '@/interface/ranking';

interface propsType {
  vsData: seasonVSDataType[];
}

const SeasonTeamVsRecord = ({ vsData }: propsType) => {
  const teams = [
    { code: 'KT', name: 'KT' },
    { code: 'HH', name: '한화' },
    { code: 'HT', name: 'KIA' },
    { code: 'LG', name: 'LG' },
    { code: 'LT', name: '롯데' },
    { code: 'NC', name: 'NC' },
    { code: 'OB', name: '두산' },
    { code: 'SK', name: 'SSG' },
    { code: 'SS', name: '삼성' },
    { code: 'WO', name: '키움' },
  ];

  const getRecord = (teamCode: string, vsTeamCode: string) => {
    const match = vsData.find(
      (record) =>
        record.teamCode === teamCode && record.vsTeamCode === vsTeamCode,
    );
    return match
      ? `${match.win}-${match.lose}${match.drawn ? `-${match.drawn}` : ''}`
      : '';
  };

  return (
    <div className="my-6">
      <GameInformationTitle titleText="2024 시즌 팀간 승패표" />
      <div className="w-full p-2 my-2 overflow-x-auto">
        <Table className="text-sm text-center border-t border-t-[#D60C0C] border-t-2">
          <TableHeader>
            <TableRow>
              <TableHead className="w-10 p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]">
                팀명
              </TableHead>
              {teams.map((team) => (
                <TableHead
                  key={team.code}
                  className={`w-10 p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2] ${
                    team.code === 'KT' ? 'bg-[#ECEEF2]/30 text-[#D60C0C]' : ''
                  }`}
                >
                  {team.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.code}>
                <TableCell
                  className={`p-1 h-1 font-medium text-center border border-[#ECEEF2] ${
                    team.code === 'KT' ? 'bg-[#ECEEF2]/30 text-[#D60C0C]' : ''
                  }`}
                >
                  {team.name}
                </TableCell>
                {teams.map((vsTeam) => (
                  <TableCell
                    key={`${team.code}-${vsTeam.code}`}
                    className={`p-1 h-1 text-center border border-[#ECEEF2] ${
                      team.code === 'KT' ? 'bg-[#ECEEF2]/30 text-[#D60C0C]' : ''
                    } ${
                      vsTeam.code === 'KT'
                        ? 'bg-[#ECEEF2]/30 text-[#D60C0C]'
                        : ''
                    }`}
                  >
                    {team.code === vsTeam.code
                      ? '■'
                      : getRecord(team.code, vsTeam.code)}
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

export default SeasonTeamVsRecord;
