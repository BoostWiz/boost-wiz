import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { useState } from 'react';
import { batterStatType } from '@/interface/ranking';
interface propsType {
  batters: batterStatType[];
  setSortKey: (value: string) => void;
}

interface HeaderContent {
  text: string;
  value: string;
  sortable?: boolean;
  width?: string;
}

const BatterTable = ({ batters, setSortKey }: propsType) => {
  const headerContents: HeaderContent[] = [
    { text: '순위', value: 'ranking', sortable: false },
    { text: '선수명', value: 'playerName', sortable: false, width: 'w-12' },
    { text: '팀명', value: 'teamName', sortable: false },
    { text: '타율', value: 'bra', sortable: true },
    { text: '경기', value: 'gamenum', sortable: true },
    { text: '타수', value: 'ab', sortable: true },
    { text: '득점', value: 'run', sortable: true },
    { text: '안타', value: 'hit', sortable: true },
    { text: '2루타', value: 'h2', sortable: true },
    { text: '3루타', value: 'h3', sortable: true },
    { text: '홈런', value: 'hr', sortable: true },
    { text: '타점', value: 'rbi', sortable: true },
    { text: '도루', value: 'sb', sortable: true },
    { text: '볼넷', value: 'bb', sortable: true },
    { text: '사구', value: 'hp', sortable: true },
    { text: '삼진', value: 'kk', sortable: true },
    { text: '장타율', value: 'slg', sortable: true },
    { text: '출루율', value: 'hra', sortable: true },
  ];
  const [sortedBy, setSortedBy] = useState('타율');
  const settingSort = (header: HeaderContent) => {
    if (header.sortable === true) {
      setSortedBy(header.text);
      setSortKey(header.value);
    }
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {headerContents.map((header: HeaderContent) => (
              <TableHead
                key={header.text}
                onClick={() => settingSort(header)}
                className={`${header.text === sortedBy ? 'text-[#D60C0C]' : ''} ${header.text == '선수명' || header.text == '평균자책점' ? 'w-12' : 'w-8'} ${header.text != '선수명' && header.text != '팀명' ? 'hover:cursor-pointer hover:text-[#D60C0C]' : ''} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
              >
                {header.text}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {batters.map((batter, idx) => (
            <TableRow
              key={batter.pcode}
              className={`${batter.teamName === 'KT' ? 'bg-[#fff5f7] text-[#D60C0C]' : 'text-[#717781] hover:bg-[#ECEEF2]/30'}`}
            >
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {idx + 1}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.playerName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.teamName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.bra}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.gamenum}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.ab}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.run}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.hit}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.h2}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.h3}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.hr}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.rbi}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.sb}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.bb}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.hp}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.kk}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.slg}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {batter.hra}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BatterTable;
