import { flexRowSpaceBetween } from '@/styles/flex';
import { batterStatType } from '@/interface/ranking';

interface propsType {
  batterTop5: batterStatType[];
}
const BatterTop5 = ({ batterTop5 }: propsType) => {
  return (
    <div className="w-[30%] py-6 my-auto">
      <p className="text-center text-lg">
        <span className="text-[#D60C0C]">전체 타자 타율</span> TOP5
      </p>
      <div className="w-[75%] mx-auto mt-4">
        {batterTop5.map((batter, idx) => (
          <div
            key={idx}
            className={`${flexRowSpaceBetween} border-b border-b-[#ECEEF2] text-sm py-1`}
          >
            <p>
              {idx + 1}. {batter.playerName} ({batter.teamName})
            </p>
            <p>{batter.hra}</p>
          </div>
        ))}
        <p className="text-right text-xs mt-1">※ 2024 정규리그 기준</p>
      </div>
    </div>
  );
};

export default BatterTop5;
