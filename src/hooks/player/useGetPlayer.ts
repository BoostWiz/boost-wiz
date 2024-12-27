import { PlayerIdType, PlayerType } from '@/interface/player';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPlayer = (playerId: PlayerIdType) => {
  const { data } = useQuery({
    queryKey: ['players', playerId],
    queryFn: async () => {
      // TODO: server url 변경 예정
      const response = await axios.get(`/api/players/${playerId}`);

      return response.data.data.map((d: PlayerType) => {
        return {
          pcode: d.pcode,
          backgroundUrl: d.playerPrvwImg,
          position: d.position,
          playerName: d.playerName,
          backnum: d.backnum,
          rank: d.rank,
        };
      });
    },
  });

  return { players: data };
};

export default useGetPlayer;
