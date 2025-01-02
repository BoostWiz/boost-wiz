interface HighlightItem {
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  boardCatSeq: number;
  boardCode: string;
  contentsDate: string;
  delYn: string;
  imgFilePath: string;
  maxArticlePerPage: number;
  refSeq: number;
  regDttm: number;
  regr: string;
  totalPage: number;
  updDttm: number;
  updr: string;
  useYn: string;
  videoLink: string;
  viewCnt: number;
}

interface WizStoryContainerProps {
  data: {
    list: HighlightItem[];
  };
}
