export interface teamRankingType {
  date: string;
  rank: number;
}

export interface teamDataType {
  ab: number; // 팀 전체 타수
  bra: string; // 팀 타율
  continue1: string; // 최근 연속 경기 결과 표시
  drawn: number; // 무승부 횟수
  er: number; // 팀 자책점
  era: string; // 팀 평균자책점
  game: number; // 경기 수
  gameFlag: number; // 게임 진행 상태(0:종료/1:진행 중 등)
  gb: string; // 선두팀과의 승차
  gyear: string; // 시즌 연도
  hr: number; // 팀 홈런 수
  hra: string; // 팀 장타율
  lastrank: number; // 이전 순위
  lose: number; // 패
  lra: string; // 패율
  r: number; // 실점
  rank: number; // 현재 순위
  run: number; // 득점
  sb: number; // 도루
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름 (한글)
  teamNameEng: string; // 팀 이름 (영문)
  win: number; // 승
  wra: string; // 승률
}

export interface seasonPitcherDataType {
  ab: number;
  bb: number;
  bb9: number;
  bbhp: number;
  bk: number;
  bs: number;
  cg: number;
  cs: number;
  er: number;
  era: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn: number;
  iso: string;
  kk: number;
  kk9: number;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  pa: number;
  qs: number;
  r: number;
  sb: number;
  sf: number;
  sh: number;
  sho: number;
  sv: number;
  teamCode: string;
  teamName: string;
  tugucount: number;
  tugucountinn: number;
  whip: string;
  wp: number;
  wra: string;
}

export interface seasonBatterDataType {
  ab: number;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cs: number;
  der: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  kkab: number;
  ops: string;
  pa: number;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  teamCode: string;
  teamName: string;
}

export interface seasonVSDataType {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}

export interface pitcherStatType {
  ab: number;
  bb: number;
  bb9: number;
  bf: number;
  bk: number;
  bs: number;
  cba: string;
  cg: number;
  cs: number;
  dpp: string;
  er: number;
  era: string;
  err: number;
  fo: number;
  gamenum: number;
  go: number;
  gofo: string;
  gyear: string;
  h1: number;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inBa: string;
  inFlag: string;
  inn: number;
  inn2: number;
  iso: string;
  kk: number;
  kk9: number;
  kkbb: string;
  l: number;
  lCg: number;
  lba: string;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  outBa: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  qs: number;
  qsPlus: number;
  quit: number;
  quitInn2: number;
  r: number;
  rba: string;
  sb: number;
  sbTryCn: number;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  startInn2: number;
  sv: number;
  svo: number;
  teamName: string;
  tugucount: number;
  tugucountinn: number;
  w: number;
  wCg: number;
  whip: string;
  wp: number;
  wra: string;
}

export interface batterStatType {
  ab: number;
  babip: string;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cba: string;
  cgopo: string;
  cs: number;
  fl: number;
  gamenum: number;
  gd: number;
  gofo: string;
  gr: number;
  gyear: string;
  h1: number;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  kkab: number;
  lba: string;
  lgopo: string;
  nppa: number;
  ops: string;
  opsPlus: string;
  pa: number;
  paFlag: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  rba: string;
  rbi: number;
  rgopo: string;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  spHra: string;
  startCn: number;
  subCn: number;
  teamName: string;
  wrHit: string;
}
