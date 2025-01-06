import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useGetPressArticle = (pageId: number) => {
  const { data } = useQuery({
    queryKey: ['pressArticleData', pageId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/article/wizpressdetail?artcSeq=${pageId}`,
      );

      return response.data.data.article
    },
  });

  return { pressArticleData: data }
};

export default useGetPressArticle;