export type PlayerIdType = 'coachstep' | 'pitcher' | 'batter' | 'cheersquad';
export interface PlayerInfoType {
  pcode: string;
  backgroundUrl: string;
  position: string;
  playerName: string;
  backnum: string;
  rank: number;
}
export interface PlayerType {
  backnum: string;
  energybar: number;
  energybarName: string;
  gyear: string;
  hasFanpage: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  position: string;
  rank: number;
  rankName: string;
  teamName: string;
}
