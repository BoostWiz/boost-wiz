import { PlayerIdType, PlayerType } from '@/interface/player';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPlayer = (playerId: PlayerIdType) => {
  const { data } = useQuery({
    queryKey: ['player', playerId],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/player/${playerId}`,
      );

      if (playerId === 'coachlist') {
        return response.data.data.list.map((d: PlayerType) => {
          return {
            pcode: d.pcode,
            backgroundUrl: d.playerPrvwImg,
            position: d.position,
            playerName: d.playerName,
            backnum: d.backnum,
          };
        });
      }

      if (playerId === 'cheerleader') {
        return response.data.data.list;
      }

      return response.data.map((d: PlayerType) => {
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
