import { PlayerDetailType, PlayerIdType } from '@/interface/player';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPlayerDetail = (
  pcode: string,
  playerDetailType: PlayerDetailType,
) => {
  const { data } = useQuery({
    queryKey: ['players', pcode, playerDetailType],
    queryFn: async () => {
      // TODO: server url 변경 예정
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/player/${playerDetailType}?pcode=${pcode}`,
      );

      console.log(response);
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
