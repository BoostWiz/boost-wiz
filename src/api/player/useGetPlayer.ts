import { PlayerIdType, PlayerType } from '@/interface/player';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchPlayerStore } from '@/store';
import { useEffect, useState } from 'react';

const useGetPlayer = (playerId: PlayerIdType) => {
  const [players, setPlayers] = useState([]);

  const { searchName, setSearchName } = useSearchPlayerStore();

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

  useEffect(() => {
    setSearchName('');
  }, []);

  useEffect(() => {
    if (searchName) {
      const filteredPlayers = data.filter(
        (p: PlayerType) => p.playerName === searchName,
      );

      return setPlayers(filteredPlayers);
    }

    setPlayers(data);
  }, [data, searchName]);

  return { players };
};

export default useGetPlayer;
