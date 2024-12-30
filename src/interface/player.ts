export type PlayerIdType =
  | 'coachlist'
  | 'pitcherlist'
  | 'catcherlist'
  | 'infielderlist';

export type PlayerDetailType =
  | 'coachdetail'
  | 'pitcherdetail'
  | 'catcherdetail'
  | 'infielderdetail';

export interface CourseType {
  info: string;
  style: string;
}

export interface HitsSprayCourseData {
  ['course double']: CourseType[];
  ['course home_run']: CourseType[];
  ['course single']: CourseType[];
  ['course triple']: CourseType[];
}

export interface PlayerInfoType {
  pcode: string;
  backgroundUrl: string;
  position: string;
  playerName: string;
  backnum: string;
  rank?: number;
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

export interface PlayerInfoDetailType {
  backnum: string;
  birth: string;
  bloodGroups: string;
  bornPlace: string;
  career: string;
  career2: string;
  debutYear: string;
  energybar: number;
  energybarName: string;
  engName: string;
  gyear: string;
  hasFanpage: string;
  height: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  money: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg1: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  position: string;
  position2: string;
  promise: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  weight: string;
}
