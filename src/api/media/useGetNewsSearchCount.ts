import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useGetNewsSearchCount = () => {
  const { data } = useQuery({
    queryKey: ['totalPage'],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/article/newslistpage?searchWord=&itemCount=5&pageNum=1`,
        );

      return response.data.data.searchCount;
    },
  });

  return { totalPage: data }
};

export default useGetNewsSearchCount;