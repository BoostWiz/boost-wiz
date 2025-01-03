export type NewsId =
  | 'wiz_news'
  | 'wiz_press'

export interface NewsItemData {
  "artcSeq": number;
  "artcTitle": string;
  "artcContents": string;
  "imgFilePath": string;
  "regDttm": number;
  "viewCnt": number;
}

export interface NewsArticleData {
  "artcSeq": number;
  "artcTitle": string;
  "artcContents": string;
  "imgFilePath": string;
  "regDttm": number;
  "viewCnt": number;
  "artcNextSeq": number;
  "artcPrevSeq": number;
}