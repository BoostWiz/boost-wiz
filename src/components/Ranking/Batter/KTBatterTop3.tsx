import { flexRowCenter } from '@/styles/flex';
import teamBraTop3Data from '@/mocks/data/teamBraTop3.json';
import teamHrTop3Data from '@/mocks/data/teamHrTop3.json';

const KTBatterTop3 = () => {
  const teamBraTop3 = teamBraTop3Data.data.list;
  const teamHrTop3 = teamHrTop3Data.data.list;

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
            src={teamBraTop3[0].playerPrvwImg}
            alt={teamBraTop3[0].playerName}
            className="w-[40%] h-full"
          />
          <div className="mx-4">
            {teamBraTop3.map((player, idx) => (
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
            src={teamHrTop3[0].playerPrvwImg}
            alt={teamHrTop3[0].playerName}
            className="w-[40%] h-full"
          />
          <div className="mx-4">
            {teamHrTop3.map((player, idx) => (
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
