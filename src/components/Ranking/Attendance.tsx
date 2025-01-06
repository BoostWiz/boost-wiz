import GameInformationTitle from '../Game/GameInformationTitle';
import { flexRowSpaceBetween, flexColumnCenter } from '@/styles/flex';
import { Select } from '@/shared/components/Select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScaleOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { getCrowdData } from '@/api/game/ranking/useGetRanking';
import { crowdDataType } from '@/interface/ranking';

const seasons = [
  { value: '2024', text: '2024 시즌' },
  { value: '2023', text: '2023 시즌' },
  { value: '2022', text: '2022 시즌' },
  { value: '2021', text: '2021 시즌' },
  { value: '2020', text: '2020 시즌' },
  { value: '2019', text: '2019 시즌' },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Attendance = () => {
  const [crowdData, setCrowdData] = useState<crowdDataType[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string>(
    seasons[0].value,
  );
  const changeSeason = (selected: string) => {
    setSelectedSeason(selected);
  };

  const getCrowd = async (season: string) => {
    setCrowdData(await getCrowdData(season));
  };

  useEffect(() => {
    getCrowd(selectedSeason);
  }, [selectedSeason]);

  const headerContents = ['순위', '팀명', '경기 수', '누적관중', '평균관중'];

  const options = {
    responsive: true,
    barPercentage: 0.7,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'nearest' as const,
        mode: 'index' as const,
        intersect: true,
        yAlign: 'bottom' as const,
        caretSize: 0,
        caretPadding: 20,
        bodySpacing: 4,
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        displayColors: false,
        callbacks: {
          title: (tooltipItems: any) => {
            const dataIndex = tooltipItems[0].dataIndex;
            return crowdData[dataIndex].teamName;
          },
          label: (context: any) => {
            return `누적관중: ${context.raw.toLocaleString()}명`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => {
            return `${(value / 10000).toLocaleString()}만`;
          },
          color: '#717781',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#ECEEF2',
        },
      } as ScaleOptions<'linear'>,
      x: {
        ticks: {
          color: '#717781',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      } as ScaleOptions<'category'>,
    },
  };

  const data = {
    labels: crowdData.map((item) => item.teamName),
    datasets: [
      {
        label: '누적관중',
        data: crowdData.map((item) => item.crowd),
        backgroundColor: crowdData.map((item) =>
          item.teamName === 'KT' ? '#D60C0C' : '#717781',
        ),
        borderWidth: 0,
        borderRadius: 0,
        hoverBackgroundColor: crowdData.map((item) =>
          item.teamName === 'KT' ? '#D60C0C' : '#717781',
        ),
      },
    ],
  };

  return (
    <div className="w-full mt-4">
      <div className="w-full mb-8">
        <div className={`${flexRowSpaceBetween}`}>
          <GameInformationTitle titleText={`${selectedSeason} 시즌 누적관중`} />
          <Select
            defaultText={`${selectedSeason} 시즌`}
            size="sm"
            onSelect={changeSeason}
            itemList={seasons}
          />
        </div>
        <div className={`w-full mt-4 p-6 ${flexColumnCenter}`}>
          <Bar options={options} data={data} />
        </div>
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
