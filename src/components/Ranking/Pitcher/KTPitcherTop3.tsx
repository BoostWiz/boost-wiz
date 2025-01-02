import { flexRowCenter } from '@/styles/flex';
import teamEraTop3Data from '@/mocks/data/teamEraTop3.json';
import teamWinningTop3Data from '@/mocks/data/teamWinningTop3.json';

const KTPitcherTop3 = () => {
  const teamEraTop3 = teamEraTop3Data.data.list;
  const teamWinningTop3 = teamWinningTop3Data.data.list;

  return (
    <div
      className={`${flexRowCenter} w-[70%] bg-[#ECEEF2]/50 pt-4 pb-6 rounded`}
    >
      <div className="w-[45%]">
        <div className={`${flexRowCenter} w-full`}>
          <img src="/logo/ktwiz_logo.png" alt="kt wiz logo" />
          <p className="text-lg text-[#D60C0C]">평균자책점 TOP3</p>
        </div>
        <div className={`${flexRowCenter} w-full mt-4`}>
          <img
            src={teamEraTop3[0].playerPrvwImg}
            alt={teamEraTop3[0].playerName}
            className="w-[40%] h-full"
          />
          <div className="mx-4">
            {teamEraTop3.map((player, idx) => (
              <p key={idx} className="my-2">
                {idx + 1}. {player.playerName}({player.era})
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <div className={`${flexRowCenter} w-full`}>
          <img src="/logo/ktwiz_logo.png" alt="kt wiz logo" />
          <p className="text-lg text-[#D60C0C]">승리 TOP3</p>
        </div>
        <div className={`${flexRowCenter} w-full mt-4`}>
          <img
            src={teamWinningTop3[0].playerPrvwImg}
            alt={teamWinningTop3[0].playerName}
            className="w-[40%] h-full"
          />
          <div className="mx-4">
            {teamWinningTop3.map((player, idx) => (
              <p key={idx} className="my-2">
                {idx + 1}. {player.playerName}({player.w}승)
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KTPitcherTop3;
