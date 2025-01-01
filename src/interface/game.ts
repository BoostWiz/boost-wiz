export interface ScheduleType {
  broadcast: string;
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  homeScore: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: '승' | '패' | '무';
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  visitScore: number;
}
