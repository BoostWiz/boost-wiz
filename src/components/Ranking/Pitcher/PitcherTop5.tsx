import { flexRowSpaceBetween } from '@/styles/flex';
import { pitcherStatType } from '@/interface/ranking';

interface propsType {
  pitcherTop5: pitcherStatType[];
}

const PitcherTop5 = ({ pitcherTop5 }: propsType) => {
  return (
    <div className="w-[30%] py-6 my-auto">
      <p className="text-center text-lg">
        <span className="text-[#D60C0C]">전체 투수 평균 자책점</span> TOP5
      </p>
      <div className="w-[75%] mx-auto mt-4">
        {pitcherTop5.map((pitcher, idx) => (
          <div
            key={idx}
            className={`${flexRowSpaceBetween} border-b border-b-[#ECEEF2] text-sm py-1`}
          >
            <p>
              {idx + 1}. {pitcher.playerName} ({pitcher.teamName})
            </p>
            <p>{pitcher.era}</p>
          </div>
        ))}
        <p className="text-right text-xs mt-1">※ 2024 정규리그 기준</p>
      </div>
    </div>
  );
};

export default PitcherTop5;
