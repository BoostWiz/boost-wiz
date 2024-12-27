// import useGetPlayerDetail from '@/hooks/player/useGetPlayerDetail';
import playerDetail from '@/dummy/player/playerDetail.json';
import { Button } from '@/shared/components';
import {
  flexColumn,
  flexColumnCenter,
  flexRow,
  flexRowCenter,
} from '@/styles/flex';
import Image from 'next/image';
import { useMemo } from 'react';
import { DialogClose } from '@/shared/components';

// TODO: 데이터 서버데이터로 변경 예정
const InfoDetail = ({ pcode }: { pcode: string }) => {
  //   const { playerDetail } = useGetPlayerDetail(pcode);
  const playerDetailInfo = useMemo(() => {
    return playerDetail.data.gameplayer;
  }, []);

  return (
    <div className={`${flexColumnCenter} gap-4`}>
      <Image
        src={playerDetailInfo.playerPrvwImg}
        alt="player image"
        width={75}
        height={75}
        className="shadow-lg rounded-md"
      />
      <div className={`${flexRow}`}>
        <span>{playerDetailInfo.playerName}</span>
        <span>({playerDetailInfo.engName})</span>
      </div>

      <div className={`${flexRowCenter} gap-2`}>
        <span>No.{playerDetailInfo.backnum}</span>
        <span className="text-xs text-slateGray">|</span>
        <span>{playerDetailInfo.teamName}</span>
        <span className="text-xs text-slateGray">|</span>
        <span>{playerDetailInfo.hittype}</span>
      </div>
      <div className={`${flexColumn}`}>
        <span className="text-xs">생년월일: {playerDetailInfo.birth}</span>
        <span className="text-xs">출신학교: {playerDetailInfo.career}</span>
        <span className="text-xs">포지션: {playerDetailInfo.position}</span>
        <span className="text-xs">연봉: {playerDetailInfo.promise}</span>
        <span className="text-xs">순위: {playerDetailInfo.rank}위</span>
      </div>
      <DialogClose>
        <Button
          variant="outline"
          onClick={() => alert('서비스 준비중입니다....')}
        >
          <span className="text-xs">더 자세히 알아보기</span>
        </Button>
      </DialogClose>
    </div>
  );
};

export default InfoDetail;
