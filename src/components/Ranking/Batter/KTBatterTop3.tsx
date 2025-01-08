import { flexRowCenter } from '@/styles/flex';
import { batterStatType } from '@/interface/ranking';

interface propsType {
  batterHraTop3: batterStatType[];
  batterHrTop3: batterStatType[];
}

const KTBatterTop3 = ({ batterHraTop3, batterHrTop3 }: propsType) => {
  return (
    <div
      className={`${flexRowCenter} w-[70%] bg-[#ECEEF2]/50 pt-4 pb-6 rounded`}
    >
      <div className="w-[45%]">
        <div className={`${flexRowCenter} w-full`}>
          <img src="/logo/ktwiz_logo.png" alt="kt wiz logo" />
          <p className="text-lg text-[#D60C0C]">타율 TOP3</p>
        </div>
        <div className={`${flexRowCenter} w-full mt-4`}>
          <img
            src={batterHraTop3[0]?.playerPrvwImg}
            alt={batterHraTop3[0]?.playerName}
            className="w-[40%] h-full"
          />
          <div className="mx-4">
            {batterHraTop3.map((player, idx) => (
              <p key={idx} className="my-2">
                {idx + 1}. {player.playerName}({player.hra})
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <div className={`${flexRowCenter} w-full`}>
          <img src="/logo/ktwiz_logo.png" alt="kt wiz logo" />
          <p className="text-lg text-[#D60C0C]">홈런 TOP3</p>
        </div>
        <div className={`${flexRowCenter} w-full mt-4`}>
          <img
            src={batterHrTop3[0]?.playerPrvwImg}
            alt={batterHrTop3[0]?.playerName}
            className="w-[40%] h-full"
          />
          <div className="mx-4">
            {batterHrTop3.map((player, idx) => (
              <p key={idx} className="my-2">
                {idx + 1}. {player.playerName}({player.hr})
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KTBatterTop3;
