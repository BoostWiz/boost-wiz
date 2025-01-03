// 관전포인트 타입 모음

export interface pointType {
  gameScore: gameScore;
  homeLineup: player[];
  homePitcher: lineupPitcher;
  homeTeamRank: teamRankInfo;
  homeTeamWinLose: winLoseInfo;
  schedule: { current: scheduleInfo; next: scheduleInfo; prev: scheduleInfo };
  visitLineup: player[];
  visitPitcher: lineupPitcher;
  visitTeamRank: teamRankInfo;
  visitTeamWinLose: winLoseInfo;
}

export interface gameScore {
  bhomeName: string;
  displayDate: string;
  endFlag: string;
  gameDate: number;
  gmKey: string;
  gtime: string;
  hOutcome: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  homeYn: string;
  hpcode: string;
  hscore: number;
  inning: number;
  stadium: string;
  stadiumKey: string;
  tbSc: string;
  vOutcome: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  vpcode: string;
  vscore: number;
}

export interface player {
  backnum: string;
  birth: string;
  career: string;
  curBra: string;
  curHra: string;
  height: string;
  hittype: string;
  money: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  pos: string;
  posidName: 'LF' | 'RF' | 'CF' | '1B' | '2B' | '3B' | 'SS' | 'C' | 'P' | 'D';
  position: string;
  promise: string;
  seq: number;
  teamCode: string;
  teamName: string;
  weight: string;
}

export interface lineupPitcher {
  babip: string;
  bb: number;
  bf: number;
  bk: number;
  bs: number;
  er: number;
  era: string;
  err: number;
  fip: string;
  fo: number;
  gamenum: number;
  go: number;
  gyear: string;
  havg: string;
  hit: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn2: number;
  innDisplay: string;
  kbb: string;
  kk: number;
  l: number;
  oavg: string;
  pcode: string;
  playerName: string;
  qs: number;
  qsPlus: number;
  r: number;
  ravg: string;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  sv: number;
  svo: number;
  tugucount: number;
  turfSave: number;
  w: number;
  wCg: number;
  war: string;
  whip: string;
  winShares: string;
  wl: string;
  wp: number;
  wra: string;
}

export interface teamRankInfo {
  ab: number;
  bra: string;
  continue1: string;
  drawn: number;
  er: number;
  era: string;
  game: number;
  gameFlag: number;
  gb: string;
  gyear: string;
  hr: number;
  hra: string;
  lastrank: number;
  lose: number;
  lra: string;
  r: number;
  rank: number;
  run: number;
  sb: number;
  teamCode: string;
  teamName: string;
  teamNameEng: string;
  win: number;
  wra: string;
}

export interface winLoseInfo {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}

export interface scheduleInfo {
  broadcast: string;
  cancelFlag: string;
  crowdCn: number;
  endFlag: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeKey: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  vscore: number;
}
