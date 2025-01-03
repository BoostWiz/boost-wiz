import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useGetNewsArticle = (pageId: number) => {
  const { data } = useQuery({
    queryKey: ['newsArticleData', pageId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/article/newsdetail?artcSeq=${pageId}`,
      );

      return response.data.data.article;
    },
  });

  return { newsArticleData: data };
};

export default useGetNewsArticle;
