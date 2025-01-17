import GameInformationTitle from '../Game/GameInformationTitle';
import { flexRowCenter } from '@/styles/flex';
import LineUpImage from './LineUpImage';
import { player } from '@/interface/point';

interface propsType {
  homeInfo: {
    teamCode: string;
    teamName: string;
    teamLogo: string;
  };
  visitInfo: {
    teamCode: string;
    teamName: string;
    teamLogo: string;
  };
  homeLineup: player[];
  visitLineup: player[];
}

const LineUp = ({
  homeInfo,
  visitInfo,
  homeLineup,
  visitLineup,
}: propsType) => {
  return (
    <div className="w-full my-10">
      <GameInformationTitle titleText="라인업" />
      <div className={`${flexRowCenter} w-full gap-10`}>
        <LineUpImage teamInfo={homeInfo} lineupInfo={homeLineup} />
        <p className="text-5xl text-[#D60C0C]">VS</p>
        <LineUpImage teamInfo={visitInfo} lineupInfo={visitLineup} />
      </div>
    </div>
  );
};

export default LineUp;
