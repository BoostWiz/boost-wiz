import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { NewsItemData } from '@/interface/media';

const itemAmount = 5; // 한 페이지당 뉴스 리스트 갯수

const useGetPressList = (
  pageNum: number,
  apiType?: string,
  searchWord?: string,
) => {
  const { data } = useQuery({
    queryKey: ['pressData', apiType, pageNum, searchWord],
    queryFn: async () => {
      const response = await axios.get(
        `/api/article/wizpresslistpage?searchWord=${searchWord ? searchWord : ``}&itemCount=${itemAmount}&pageNum=${pageNum}`,
      );

      if (apiType === 'total') {
        return response.data.data.searchCount;
      }

      return response.data.data.list.map((d: NewsItemData) => {
        return {
          artcSeq: d.artcSeq,
          artcTitle: d.artcTitle,
          artcContents: d.artcContents,
          imgFilePath: d.imgFilePath,
          regDttm: d.regDttm,
          viewCnt:d.viewCnt,
        };
      });
    },
  });

  return { pressData: data }
};

export default useGetPressList;