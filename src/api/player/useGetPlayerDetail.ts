import { PlayerDetailType } from '@/interface/player';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPlayerDetail = (
  pcode: string,
  playerDetailType: PlayerDetailType,
) => {
  const { data } = useQuery({
    queryKey: ['players', pcode, playerDetailType],
    queryFn: async () => {
      const response = await axios.get(
        `/api/player/${playerDetailType}?pcode=${pcode}`,
      );

      if (playerDetailType === 'coachdetail') {
        return response.data.data.coachstep;
      } else {
        return response.data.data.gameplayer;
      }
    },
  });

  return { playerDetail: data };
};

export default useGetPlayerDetail;
