import {
  flexColumn,
  flexColumnCenter,
  flexRow,
  flexRowCenter,
} from '@/styles/flex';
import Image from 'next/image';
import useGetPlayerDetail from '@/api/player/useGetPlayerDetail';
import { PlayerDetailType } from '@/interface/player';

interface InfoDetailProps {
  pcode: string;
  playerDetailType: PlayerDetailType;
}

const InfoDetail = ({ pcode, playerDetailType }: InfoDetailProps) => {
  const { playerDetail } = useGetPlayerDetail(pcode, playerDetailType);

  return (
    playerDetail && (
      <>
        <div className={`${flexColumnCenter} gap-4 min-w-[250px]`}>
          <Image
            src={playerDetail.playerPrvwImg}
            alt="player image"
            width={75}
            height={75}
            className="shadow-lg rounded-md"
          />
          <div className={`${flexRow}`}>
            <span>{playerDetail.playerName}</span>
            <span>({playerDetail.engName})</span>
          </div>

          <div className={`${flexRowCenter} gap-2`}>
            <span>No.{playerDetail.backnum}</span>
            <span className="text-xs text-slateGray">|</span>
            <span>{playerDetail.teamName}</span>
            <span className="text-xs text-slateGray">|</span>
            <span>{playerDetail.hittype}</span>
          </div>
          <div className={`${flexColumn}`}>
            <span className="text-xs">생년월일: {playerDetail.birth}</span>
            <span className="text-xs">출신학교: {playerDetail.career}</span>
            <span className="text-xs">포지션: {playerDetail.position}</span>
            <span className="text-xs">
              연봉: {playerDetail.promise || '비공개'}
            </span>
            {playerDetail.rank && (
              <span className="text-xs">순위: {playerDetail.rank}위</span>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default InfoDetail;
