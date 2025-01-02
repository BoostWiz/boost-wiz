'use client';

import KTBatterTop3 from './Batter/KTBatterTop3';
import BatterTop5 from './Batter/BatterTop5';
import KTBatterTable from './Batter/KTBatterTable';
import BatterTable from './Batter/BatterTable';
import {
  flexColumnCenter,
  flexRowSpaceBetween,
  flexRowCenter,
} from '@/styles/flex';
import { useState } from 'react';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import Input from '@/shared/components/Input';
import { Button } from '@/shared/components';
import { Select } from '@/shared/components/Select';

const seasons = [
  { value: '2024 시즌', text: '2024 시즌' },
  { value: '2023 시즌', text: '2023 시즌' },
  { value: '2022 시즌', text: '2022 시즌' },
  { value: '2021 시즌', text: '2021 시즌' },
  { value: '2020 시즌', text: '2020 시즌' },
  { value: '2019 시즌', text: '2019 시즌' },
  { value: '2018 시즌', text: '2018 시즌' },
  { value: '2017 시즌', text: '2017 시즌' },
  { value: '2016 시즌', text: '2016 시즌' },
  { value: '2015 시즌', text: '2015 시즌' },
  { value: '2014 시즌', text: '2014 시즌' },
];

const BatterRanking = () => {
  const [selectedTable, setSelectedTable] = useState('KT WIZ 타자');
  const tabsData = ['KT WIZ 타자', '전체 타자'];

  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  const changeSeason = (selected: any) => {
    setSelectedSeason(selected);
  };

  return (
    <div className={`${flexColumnCenter} w-full mt-4`}>
      <div className={`${flexRowSpaceBetween} w-full mb-4`}>
        <KTBatterTop3 />
        <BatterTop5 />
      </div>
      <div className="w-full my-4 h-16 bg-[#ECEEF2]/50 border-y border-y-[#ECEEF2]">
        <div className={`container-default !py-0 ${flexRowSpaceBetween}`}>
          {/* 테이블 선택용 */}
          <TabsRoot
            value={selectedTable}
            onValueChange={setSelectedTable}
            className="h-full"
          >
            <TabsList className="h-full">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  isActive={selectedTable === tab}
                  className={
                    selectedTable == tab
                      ? 'h-16 text-md text-black border-b'
                      : 'h-16 text-md text-gray'
                  }
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </TabsRoot>
          {/* 검색창, 선택창 */}
          <div className={`${flexRowCenter} pr-2`}>
            <div className={`${flexRowCenter} text-sm mr-6`}>
              <p className="whitespace-nowrap mr-2">선수 검색</p>
              <Input
                className="bg-white mr-1"
                placeholder="선수 이름을 입력하세요."
              />
              <Button>검색</Button>
            </div>
            <div className="bg-white">
              <Select
                defaultText={selectedSeason.text}
                size="sm"
                onSelect={changeSeason}
                itemList={seasons}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedTable === tabsData[0] && <KTBatterTable />}
      {selectedTable === tabsData[1] && <BatterTable />}
    </div>
  );
};

export default BatterRanking;
