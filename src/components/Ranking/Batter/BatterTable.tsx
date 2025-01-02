'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import batterData from '@/mocks/data/batterData.json';
import { useState } from 'react';

const BatterTable = () => {
  const batters = batterData.data.list;
  const headerContents = [
    '순위',
    '선수명',
    '팀명',
    '타율',
    '경기',
    '타수',
    '득점',
    '안타',
    '2루타',
    '3루타',
    '홈런',
    '타점',
    '도루',
    '볼넷',
    '사구',
    '삼진',
    '장타율',
    '출루율',
  ];
  const [sortedBy, setSortedBy] = useState('타율');
  const settingSort = (header: string) => {
    if (header !== '선수명' && header !== '팀명' && header !== '순위') {
      setSortedBy(header);
    }
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {headerContents.map((headerName) => (
              <TableHead
                key={headerName}
                onClick={() => settingSort(headerName)}
                className={`${headerName === sortedBy ? 'text-[#D60C0C]' : ''} ${headerName == '선수명' ? 'w-12' : 'w-8'} ${headerName != '선수명' && headerName != '팀명' && headerName != '순위' ? 'hover:cursor-pointer hover:text-[#D60C0C]' : ''} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
              >
                {headerName}
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
