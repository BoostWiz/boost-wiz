import axios from 'axios';

export const getSeasonTeamRanking = async () => {
  const res = await axios.get(`/api/game/rank/periodteamrank`);
  return res.data.data.list;
};
