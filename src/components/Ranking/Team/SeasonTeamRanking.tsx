import GameInformationTitle from '../../Game/GameInformationTitle';
import { teamRankingType } from '@/interface/ranking';
import { flexColumnCenter } from '@/styles/flex';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScaleOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface propsType {
  teamRankingData: teamRankingType[];
}
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointRadius: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    pointHoverBorderWidth: number;
  }[];
}

const SeasonTeamRanking = ({ teamRankingData }: propsType) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'nearest' as const,
        mode: 'index' as const,
        intersect: true,
        yAlign: 'bottom' as const,
        caretSize: 0, // 툴팁 아래 화살표 제거
        caretPadding: 20, // 툴팁과 데이터 포인트 사이 간격
        bodySpacing: 4,
        padding: 12, // 툴팁 내부 패딩
        titleFont: {
          size: 16, // 툴팁 제목 폰트 크기
        },
        bodyFont: {
          size: 14, // 툴팁 내용 폰트 크기
        },
      },
    },
    scales: {
      y: {
        min: 1,
        max: 10,
        reverse: true,
        ticks: {
          stepSize: 1,
          callback: (value: number): string => `${value}등`,
        },
      } as ScaleOptions<'linear'>,
    },
  };

  // 차트 데이터
  const data: ChartData = {
    labels: teamRankingData.map((item) => {
      // YYYYMMDD 형식에서 MM.DD 형식으로 변환
      const dateStr = item.date;
      const month = dateStr.substring(4, 6);
      const day = dateStr.substring(6, 8);
      return `${month}.${day}`;
    }),
    datasets: [
      {
        label: '팀 순위',
        data: teamRankingData.map((item) => item.rank),
        borderColor: '#D60C0C',
        backgroundColor: '#D60C0C/50',
        pointBackgroundColor: '#D60C0C',
        pointBorderColor: '#D60C0C',
        pointRadius: 3, // 기본 점 크기
        pointHoverRadius: 8, // 마우스 오버시 점 크기
        pointHoverBackgroundColor: '#D60C0C', // 마우스 오버시 점 색상
        pointHoverBorderColor: '#D60C0C', // 마우스 오버시 점 테두리 색상
        pointHoverBorderWidth: 2, // 마우스 오버시 테두리 두께
      },
    ],
  };

  return (
    <div className={`w-full`}>
      <GameInformationTitle titleText="2024 시즌 팀 순위" />
      <div className={`p-4 ${flexColumnCenter}`}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SeasonTeamRanking;
