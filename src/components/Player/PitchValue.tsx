import useGetPlayerAdditionalInfo from '@/api/player/useGetPlayerAdditionalInfo';
import { PlayerDetailType } from '@/interface/player';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const initialData = {
  labels: [
    '2-seam Fastball',
    '4-seam Fastball',
    'ChangeUp',
    'Curve',
    'Cutter',
    'Forkball',
    'Sinker',
    'Slider',
  ],
  datasets: [
    {
      label: 'PitchingRatio (%)',
      data: [0, 0, 0, 0, 0, 0, 0, 0], // 초기값을 0으로 설정
      backgroundColor: 'rgba(234, 1, 1, 0.7)',
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 1,
    },
  ],
};

const options: { plugins: {}; scales: {} } = {
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: (tooltipItem: { raw: string; label: string }) => {
          const value = tooltipItem.raw;
          const label = tooltipItem.label;
          return `${label}: ${value}%`;
        },
      },
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 1,
    },
  },
  scales: {
    r: {
      ticks: {
        display: true,
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

interface PitchValueProps {
  playerName: string;
  playerDetailType: PlayerDetailType;
}

const PitchValue = ({ playerName, playerDetailType }: PitchValueProps) => {
  const { additionalInfo: pitchingRatio } = useGetPlayerAdditionalInfo(
    'KT',
    playerName,
    playerDetailType,
  );

  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if (pitchingRatio) {
      setChartData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: [
              pitchingRatio['2-seam Fastball'] || 0,
              pitchingRatio['4-seam Fastball'] || 0,
              pitchingRatio['ChangeUp'] || 0,
              pitchingRatio['Curve'] || 0,
              pitchingRatio['Cutter'] || 0,
              pitchingRatio['Forkball'] || 0,
              pitchingRatio['Sinker'] || 0,
              pitchingRatio['Slider'] || 0,
            ],
          },
        ],
      }));
    }
  }, [pitchingRatio]);

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Radar data={chartData} options={options} width={400} height={400} />
    </div>
  );
};

export default PitchValue;
