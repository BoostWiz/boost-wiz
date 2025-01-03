import pitcherEraTop5Data from '@/mocks/data/pitcherEraTop5.json';
import { flexRowSpaceBetween } from '@/styles/flex';

const PitcherTop5 = () => {
  const pitcherEraTop5 = pitcherEraTop5Data.data.list;

  return (
    <div className="w-[30%] py-6 my-auto">
      <p className="text-center text-lg">
        <span className="text-[#D60C0C]">전체 투수 평균 자책점</span> TOP5
      </p>
      <div className="w-[75%] mx-auto mt-4">
        {pitcherEraTop5.map((pitcher, idx) => (
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
        <p className="text-right text-xs mt-1">
          ※ {pitcherEraTop5[0].gyear} 정규리그 기준
        </p>
      </div>
    </div>
  );
};

export default PitcherTop5;
