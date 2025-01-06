import axios from 'axios';

// 우리팀 순위 가져오기
export const getSeasonTeamRanking = async () => {
  const res = await axios.get(`/api/game/rank/periodteamrank`);
  return res.data.data.list;
};

// 시즌 전체 팀 기록 가져오기
export const getSeasonTeamData = async () => {
  const res = await axios.get(`/api/game/teamrankbyyear`);
  return res.data.data.list;
};

// 시즌 타자 기록 가져오기
export const getSeasonPitcherData = async () => {
  const res = await axios.get(`/api/game/rank/pitching`);
  return res.data.data.list;
};

// 시즌 투수 기록 가져오기
export const getSeasonBatterData = async () => {
  const res = await axios.get(`/api/game/rank/batting`);
  return res.data.data.list;
};

// 상대 전적 가져오기
export const getSeasonVSData = async () => {
  const res = await axios.get(`/api/game/rank/teamvs`);
  return res.data.data.list;
};
