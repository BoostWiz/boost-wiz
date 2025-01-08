import axios from 'axios';

interface keyDataType {
  gameDate: string;
  gmkey: string;
}

// 관점 포인트 api
export const getPointData = async (gameData: keyDataType) => {
  const res = await axios.get(
    `/api/game/watchpoint?gameDate=${gameData.gameDate}&gmkey=${gameData.gmkey}`,
  );
  return res.data.data;
};
