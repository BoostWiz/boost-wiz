import axios from 'axios';

interface keyDataType {
  gameDate: string;
  gmkey: string;
}

export const getLatestGame = async () => {
  const res = await axios.get(`http://54.180.228.165/api/game/recentGames`);
  return {
    gameDate: res.data.data.current.gameDate,
    gmkey: res.data.data.current.gmkey,
  };
};

export const getBoxscore = async (gameData: keyDataType) => {
  const res = await axios.get(
    `http://54.180.228.165/api/game/boxscore?gameDate=${gameData.gameDate}&gmkey=${gameData.gmkey}`,
  );
  return res.data.data;
};
