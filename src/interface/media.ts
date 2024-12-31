export type NewsId =
  | 'wiz_news'
  | 'wiz_press'

export interface NewsListData {
  "artcContents": string;
  "artcSeq": number;
  "artcTitle": string;
  "imgFilePath": string;
  "regDttm": number;
  "updDttm": number;
  "updr": string;
  "viewCnt": number;
}