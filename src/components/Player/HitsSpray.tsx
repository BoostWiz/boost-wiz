import useGetPlayerAdditionalInfo from '@/api/player/useGetPlayerAdditionalInfo';
import { PlayerDetailType } from '@/interface/player';
import Image from 'next/image';

interface HitsSprayProps {
  playerName: string;
  playerDetailType: PlayerDetailType;
}

const HitsSpray = ({ playerName, playerDetailType }: HitsSprayProps) => {
  const { additionalInfo } = useGetPlayerAdditionalInfo(
    'KT',
    playerName,
    playerDetailType,
  );

  return (
    <div>
      <Image
        src={'/common/groundxy.png'}
        width={336}
        height={365}
        alt="그라운드 이미지"
      />
    </div>
  );
};

export default HitsSpray;
