import KTBatterTop3 from './Batter/KTBatterTop3';
import BatterTop5 from './Batter/BatterTop5';
import KTBatterTable from './Batter/KTBatterTable';
import BatterTable from './Batter/BatterTable';
import {
  flexColumnCenter,
  flexRowSpaceBetween,
  flexRowCenter,
} from '@/styles/flex';
import { useState, useEffect } from 'react';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import Input from '@/shared/components/Input';
import { Button } from '@/shared/components';
import { Select } from '@/shared/components/Select';
import {
  getBatterHraTop3Data,
  getBatterHrTop3Data,
  getBatterTop5Data,
  getKTBatterData,
  getBatterData,
} from '@/api/game/ranking/useGetRanking';
import { batterStatType } from '@/interface/ranking';

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

const BatterRanking = () => {
  const [selectedTable, setSelectedTable] = useState('KT WIZ 타자');
  const tabsData = ['KT WIZ 타자', '전체 타자'];
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

  const [batterHraTop3, setBatterHraTop3] = useState<batterStatType[]>([]);
  const [batterHrTop3, setBatterHrTop3] = useState<batterStatType[]>([]);
  const [batterTop5, setBatterTop5] = useState<batterStatType[]>([]);
  const [ktBatters, setKtBatters] = useState<batterStatType[]>([]);
  const [batters, setBatters] = useState<batterStatType[]>([]);

  const getBatterHraTop3 = async (season: string) => {
    setBatterHraTop3(await getBatterHraTop3Data(season));
  };
  const getBatterHrTop3 = async (season: string) => {
    setBatterHrTop3(await getBatterHrTop3Data(season));
  };
  const getBatterTop5 = async () => {
    setBatterTop5(await getBatterTop5Data());
  };

  const getKtBatters = async (
    season: string,
    pname: string,
    sortKey: string,
  ) => {
    setKtBatters(await getKTBatterData(season, pname, sortKey));
  };

  const getBatters = async (season: string, pname: string, sortKey: string) => {
    setBatters(await getBatterData(season, pname, sortKey));
  };

  useEffect(() => {
    getBatterHraTop3(selectedSeason);
    getBatterHrTop3(selectedSeason);
    getBatterTop5();
  }, [selectedSeason]);

  useEffect(() => {
    getKtBatters(selectedSeason, pname, ktSortKey);
  }, [selectedSeason, pname, ktSortKey]);

  useEffect(() => {
    getBatters(selectedSeason, pname, sortKey);
  }, [selectedSeason, pname, sortKey]);

  return (
    <div className={`${flexColumnCenter} w-full mt-4`}>
      <div className={`${flexRowSpaceBetween} w-full mb-4`}>
        <KTBatterTop3
          batterHraTop3={batterHraTop3}
          batterHrTop3={batterHrTop3}
        />
        <BatterTop5 batterTop5={batterTop5} />
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
        <KTBatterTable ktBatters={ktBatters} setKtSortKey={setKtSortKey} />
      )}
      {selectedTable === tabsData[1] && (
        <BatterTable batters={batters} setSortKey={setSortKey} />
      )}
    </div>
  );
};

export default BatterRanking;
