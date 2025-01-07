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
        `/api/additionalInfo?team=${team}&player=${playerName}`,
      );

      if (playerDetailType === 'pitcherdetail') {
        return response.data.pitchingRatio;
      }
      if (
        playerDetailType === 'infielderdetail' ||
        playerDetailType === 'catcherdetail'
      ) {
        return response.data;
      }
    },
  });

  return { additionalInfo: data };
};

export default useGetPlayerAdditionalInfo;
