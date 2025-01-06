import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { useState } from 'react';
import { pitcherStatType } from '@/interface/ranking';

interface propsType {
  pitchers: pitcherStatType[];
  setSortKey: (value: string) => void;
}

interface HeaderContent {
  text: string;
  value: string;
  sortable?: boolean;
  width?: string;
}

const PitcherTable = ({ pitchers, setSortKey }: propsType) => {
  const headerContents: HeaderContent[] = [
    { text: '순위', value: 'ranking', sortable: false, width: 'w-8' },
    { text: '선수명', value: 'playerName', sortable: false, width: 'w-12' },
    { text: '팀명', value: 'teamName', sortable: false },
    { text: '평균자책점', value: 'era', sortable: true, width: 'w-12' },
    { text: '경기', value: 'gamenum', sortable: true, width: 'w-8' },
    { text: '승', value: 'w', sortable: true, width: 'w-8' },
    { text: '패', value: 'l', sortable: true, width: 'w-8' },
    { text: '세', value: 'sv', sortable: true, width: 'w-8' },
    { text: '홀', value: 'hold', sortable: true, width: 'w-8' },
    { text: '승률', value: 'wra', sortable: true, width: 'w-8' },
    { text: '이닝', value: 'inn', sortable: true, width: 'w-8' },
    { text: '피안타', value: 'hit', sortable: true, width: 'w-8' },
    { text: '피홈런', value: 'hr', sortable: true, width: 'w-8' },
    { text: '볼넷', value: 'bb', sortable: true, width: 'w-8' },
    { text: '사구', value: 'hp', sortable: true, width: 'w-8' },
    { text: '탈삼진', value: 'kk', sortable: true, width: 'w-8' },
    { text: '실점', value: 'r', sortable: true, width: 'w-8' },
    { text: '자책점', value: 'er', sortable: true, width: 'w-8' },
  ];

  const [sortedBy, setSortedBy] = useState<string>('평균자책점');
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
          {pitchers.map((pitcher, idx) => (
            <TableRow
              key={pitcher.pcode}
              className={`${pitcher.teamName === 'KT' ? 'bg-[#fff5f7] text-[#D60C0C]' : 'text-[#717781] hover:bg-[#ECEEF2]/30'}`}
            >
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {idx + 1}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.playerName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.teamName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.era}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.gamenum}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.w}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.l}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.sv}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.hold}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.wra}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.inn}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.hit}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.hr}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.bb}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.hp}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.kk}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.r}
              </TableCell>
              <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                {pitcher.er}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default PitcherTable;
