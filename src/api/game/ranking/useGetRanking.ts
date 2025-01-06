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

// era top3
export const getPitcherEraTop3Data = async (year: string) => {
  const res = await axios.get(`/api/game/rank/pitcher/era/top3?gyear=${year}`);
  return res.data.data.list;
};

// 승리 top3
export const getPitcherWinTop3Data = async (year: string) => {
  const res = await axios.get(`/api/game/rank/pitcher/win/top3?gyear=${year}`);
  return res.data.data.list;
};

// 전체투수 top5
export const getPitcherTop5Data = async () => {
  const res = await axios.get(`/api/game/rank/pitcher/total/top5`);
  return res.data.data.list;
};

// kt 투수 데이터
export const getKTPitcherData = async (
  year: string,
  pname: string,
  sortKey: string,
) => {
  const res = await axios.get(
    `/api/game/rank/kt/pitcher?gyear=${year}&pname=${pname}&sortKey=${sortKey.toUpperCase()}`,
  );
  return res.data.data.list;
};

// 전체 투수 데이터
export const getPitcherData = async (
  year: string,
  pname: string,
  sortKey: string,
) => {
  const res = await axios.get(
    `/api/game/rank/total/pitcher?gyear=${year}&pname=${pname}&sortKey=${sortKey.toUpperCase()}`,
  );
  return res.data.data.list;
};

// 타자 타율 top3
export const getBatterHraTop3Data = async (year: string) => {
  const res = await axios.get(`/api/game/rank/batter/hra/top3?gyear=${year}`);
  return res.data.data.list;
};

// 타자 홈런 top3
export const getBatterHrTop3Data = async (year: string) => {
  const res = await axios.get(`/api/game/rank/batter/hr/top3?gyear=${year}`);
  return res.data.data.list;
};

// 전체 타자 타율 top5 /api/game/rank/batter/total/top5
export const getBatterTop5Data = async () => {
  const res = await axios.get(`/api/game/rank/batter/total/top5`);
  return res.data.data.list;
};

// KT 타자 데이터
export const getKTBatterData = async (
  year: string,
  pname: string,
  sortKey: string,
) => {
  const res = await axios.get(
    `/api/game/rank/kt/batter?gyear=${year}&pname=${pname}&sortKey=${sortKey.toUpperCase()}`,
  );
  return res.data.data.list;
};

// 전체 타자 데이터
export const getBatterData = async (
  year: string,
  pname: string,
  sortKey: string,
) => {
  const res = await axios.get(
    `/api/game/rank/total/batter?gyear=${year}&pname=${pname}&sortKey=${sortKey.toUpperCase()}`,
  );
  return res.data.data.list;
};

// 관중현황  /api/game/rank/crowd?gyear=2024
export const getCrowdData = async (gyear: string) => {
  const res = await axios.get(`/api/game/rank/crowd?gyear=${gyear}`);
  return res.data.data.list;
};
