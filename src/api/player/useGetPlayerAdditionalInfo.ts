import { PlayerDetailType } from '@/interface/player';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPlayerAdditionalInfo = (
  team: string,
  playerName: string,
  playerDetailType: PlayerDetailType,
) => {
  const { data } = useQuery({
    queryKey: ['playerAdditionalInfo', playerName],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/additionalInfo?team=${team}&player=${playerName}`,
      );

      if (playerDetailType === 'pitcherdetail') {
        return response.data.pitchingRatio;
      }
      if (
        playerDetailType === 'infielderdetail' ||
        playerDetailType === 'catcherdetail'
      ) {
        // TODO: 내야수 or 포수일 때 데이터 파싱 작업 필요.
        return [];
      }
    },
  });

  return { additionalInfo: data };
};

export default useGetPlayerAdditionalInfo;
