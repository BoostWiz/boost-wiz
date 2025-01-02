'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import ktBatterData from '@/mocks/data/ktBatterData.json';
import { useState } from 'react';

const KTBatterTable = () => {
  const ktBatters = ktBatterData.data.list;
  const headerContents = [
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
    if (header !== '선수명' && header !== '팀명') {
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
                className={`${headerName === sortedBy ? 'text-[#D60C0C]' : ''} ${headerName == '선수명' ? 'w-12' : 'w-8'} ${headerName != '선수명' && headerName != '팀명' ? 'hover:cursor-pointer hover:text-[#D60C0C]' : ''} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
              >
                {headerName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ktBatters.map((batter) => (
            <TableRow key={batter.pcode} className="hover:bg-[#ECEEF2]/30">
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.playerName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.teamName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.bra}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.gamenum}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.ab}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.run}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.hit}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.h2}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.h3}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.hr}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.rbi}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.sb}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.bb}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.hp}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.kk}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.slg}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {batter.hra}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default KTBatterTable;
