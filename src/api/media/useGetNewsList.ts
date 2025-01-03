import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { NewsItemData } from '@/interface/media';

const useGetNewsList = (pageNum: number) => {
  const { data } = useQuery({
    queryKey: ['newsData', pageNum],
    queryFn: async () => {
      const response = await axios.get(
        `/api/article/newslistpage?searchWord=&itemCount=5&pageNum=${pageNum}`,
      );

      return response.data.data.list.map((d: NewsItemData) => {
        return {
          artcSeq: d.artcSeq,
          artcTitle: d.artcTitle,
          artcContents: d.artcContents,
          imgFilePath: d.imgFilePath,
          regDttm: d.regDttm,
          viewCnt: d.viewCnt,
        };
      });
    },
  });

  return { newsData: data };
};

export default useGetNewsList;
