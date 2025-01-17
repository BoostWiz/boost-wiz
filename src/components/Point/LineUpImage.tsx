import { flexColumnCenter, flexRowCenter } from '@/styles/flex';
import { player } from '@/interface/point';

interface propsType {
  teamInfo: {
    teamCode: string;
    teamName: string;
    teamLogo: string;
  };
  lineupInfo: player[];
}

const LineUpImage = ({ teamInfo, lineupInfo }: propsType) => {
  return (
    <div className={`${flexColumnCenter} w-full`}>
      <div className={`${flexRowCenter} pr-4`}>
        <img
          src={`/images/logo/${teamInfo.teamCode}.png`}
          alt="logo"
          className="w-20 h-20"
        />
        <p className="text-xl">{teamInfo.teamName} 라인업</p>
      </div>
      <div className="relative">
        <img
          src={'/images/game/groundxy.png'}
          alt="야구장이미지"
          className="w-full"
        />
        {lineupInfo.map((player: player) => (
          <LineupLabel playerInfo={player} key={player.backnum} />
        ))}
      </div>
    </div>
  );
};

const position = {
  LF: 'top-20 left-0',
  RF: 'top-20 right-0',
  CF: 'top-12 left-32 ml-1',
  '1B': 'bottom-32 right-6',
  '2B': 'bottom-44 right-16',
  SS: 'bottom-44 left-16',
  '3B': 'bottom-32 left-6',
  C: 'bottom-12 left-32 ml-1',
  P: 'bottom-32 left-32 ml-1',
  D: 'bottom-12 right-0',
};

const LineupLabel = ({ playerInfo }: { playerInfo: player }) => {
  return (
    <div
      className={`absolute ${position[playerInfo.posidName]} bg-[#ECEEF2]/80 w-[100px] h-[26px] text-center text-xs border-l border-l-[#D60C0C] rounded border-l-4`}
    >
      <p className="py-1">
        {playerInfo.playerName} ({playerInfo.posidName})
      </p>
    </div>
  );
};

export default LineUpImage;
