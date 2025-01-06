import KTPitcherTop3 from './Pitcher/KTPitcherTop3';
import PitcherTop5 from './Pitcher/PitcherTop5';
import KTPitcherTable from './Pitcher/KTPitcherTable';
import PitcherTable from './Pitcher/PitcherTable';
import {
  flexColumnCenter,
  flexRowSpaceBetween,
  flexRowCenter,
} from '@/styles/flex';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import Input from '@/shared/components/Input';
import { Button } from '@/shared/components';
import { Select } from '@/shared/components/Select';
import { useState, useEffect } from 'react';
import {
  getPitcherEraTop3Data,
  getPitcherWinTop3Data,
  getPitcherTop5Data,
  getKTPitcherData,
  getPitcherData,
} from '@/api/game/ranking/useGetRanking';
import { pitcherStatType } from '@/interface/ranking';

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

const PitcherRanking = () => {
  const [selectedTable, setSelectedTable] = useState('KT WIZ 투수');
  const tabsData = ['KT WIZ 투수', '전체 투수'];
  const [selectedSeason, setSelectedSeason] = useState<string>(
    seasons[0].value,
  );
  const changeSeason = (selected: string) => {
    setSelectedSeason(selected);
  };

  const [inputValue, setInputValue] = useState('');
  const [pname, setPname] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPname(inputValue);
    setInputValue('');
  };
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const [ktSortKey, setKtSortKey] = useState<string>('era');
  const [sortKey, setSortKey] = useState<string>('era');

  const [pitcherEraTop3, setPitcherEraTop3] = useState<pitcherStatType[]>([]);
  const [pitcherWinTop3, setPitcherWinTop3] = useState<pitcherStatType[]>([]);
  const [pitcherTop5, setPitcherTop5] = useState<pitcherStatType[]>([]);
  const [ktPitcher, setKtPitcher] = useState<pitcherStatType[]>([]);
  const [pitchers, setPitchers] = useState<pitcherStatType[]>([]);

  const getPitcherEraTop3 = async (season: string) => {
    setPitcherEraTop3(await getPitcherEraTop3Data(season));
  };
  const getPitcherWinTop3 = async (season: string) => {
    setPitcherWinTop3(await getPitcherWinTop3Data(season));
  };
  const getPitcherTop5 = async () => {
    setPitcherTop5(await getPitcherTop5Data());
  };

  const getKtPitcher = async (
    season: string,
    pname: string,
    sortKey: string,
  ) => {
    setKtPitcher(await getKTPitcherData(season, pname, sortKey));
  };

  const getPitchers = async (
    season: string,
    pname: string,
    sortKey: string,
  ) => {
    setPitchers(await getPitcherData(season, pname, sortKey));
  };

  useEffect(() => {
    getPitcherEraTop3(selectedSeason);
    getPitcherWinTop3(selectedSeason);
    getPitcherTop5();
  }, [selectedSeason]);

  useEffect(() => {
    getKtPitcher(selectedSeason, pname, ktSortKey);
  }, [selectedSeason, pname, ktSortKey]);

  useEffect(() => {
    getPitchers(selectedSeason, pname, sortKey);
  }, [selectedSeason, pname, sortKey]);

  return (
    <div className={`${flexColumnCenter} w-full mt-4`}>
      <div className={`${flexRowSpaceBetween} w-full mb-4`}>
        <KTPitcherTop3
          pitcherEraTop3={pitcherEraTop3}
          pitcherWinTop3={pitcherWinTop3}
        />
        <PitcherTop5 pitcherTop5={pitcherTop5} />
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <Button onClick={handleSubmit}>검색</Button>
            </div>
            <div className="bg-white">
              <Select
                defaultText={`${selectedSeason} 시즌`}
                size="sm"
                onSelect={changeSeason}
                itemList={seasons}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-2 text-right text-sm text-gray">
        ※ 각 항목을 클릭하면 순위를 볼 수 있습니다.
      </div>
      {selectedTable === tabsData[0] && (
        <KTPitcherTable ktPitchers={ktPitcher} setKtSortKey={setKtSortKey} />
      )}
      {selectedTable === tabsData[1] && (
        <PitcherTable pitchers={pitchers} setSortKey={setSortKey} />
      )}
    </div>
  );
};

export default PitcherRanking;
