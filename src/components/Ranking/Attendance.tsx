'use client';

import GameInformationTitle from '../Game/GameInformationTitle';
import { flexRowSpaceBetween } from '@/styles/flex';
import { Select } from '@/shared/components/Select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import { useState } from 'react';
import crowdDataList from '@/mocks/data/crowdData.json';

const seasons = [
  { value: '2024', text: '2024 시즌' },
  { value: '2023', text: '2023 시즌' },
  { value: '2022', text: '2022 시즌' },
  { value: '2021', text: '2021 시즌' },
  { value: '2020', text: '2020 시즌' },
  { value: '2019', text: '2019 시즌' },
  { value: '2018', text: '2018 시즌' },
  { value: '2017', text: '2017 시즌' },
  { value: '2016', text: '2016 시즌' },
  { value: '2015', text: '2015 시즌' },
  { value: '2014', text: '2014 시즌' },
];

const Attendance = () => {
  const crowdData = crowdDataList.data.list;

  const [selectedSeason, setSelectedSeason] = useState(seasons[0].value);

  const changeSeason = (selected: any) => {
    console.log(selected);
    setSelectedSeason(selected);
  };

  const headerContents = ['순위', '팀명', '경기 수', '누적관중', '평균관중'];

  return (
    <div className="w-full mt-4">
      <div className="mb-8">
        <div className={`${flexRowSpaceBetween}`}>
          <GameInformationTitle titleText={`${selectedSeason} 시즌 누적관중`} />
          <Select
            defaultText={selectedSeason + ' 시즌'}
            size="sm"
            onSelect={changeSeason}
            itemList={seasons}
          />
        </div>
        <div className="mt-4">여기에 차트</div>
      </div>
      <div>
        <GameInformationTitle titleText={`${selectedSeason} 시즌 관중 기록`} />
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              {headerContents.map((headerName) => (
                <TableHead
                  key={headerName}
                  className={`${headerName == '순위' ? 'w-4' : 'w-14'} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
                >
                  {headerName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {crowdData.map((teamData, idx) => (
              <TableRow
                key={teamData.teamCode}
                className={`${teamData.teamName === 'KT' ? 'bg-[#fff5f7] text-[#D60C0C]' : 'text-[#717781] hover:bg-[#ECEEF2]/30'}`}
              >
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {idx + 1}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.teamName}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.game}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {teamData.crowd}
                </TableCell>
                <TableCell className="p-1 h-1 text-center border border-[#ECEEF2]">
                  {Math.floor(teamData.crowd / teamData.game)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Attendance;
