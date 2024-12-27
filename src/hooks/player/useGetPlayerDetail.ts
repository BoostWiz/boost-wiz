import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

const useGetPlayerDetail = (pcode: string) => {
  const { data } = useQuery({
    queryKey: ['players', pcode],
    queryFn: async () => {
      // TODO: server url 변경 예정
      // const response = await axios.get(`/api/players/${pcode}`);
      // return response.data.data;
    },
  });

  return { playerDetail: data };
};

export default useGetPlayerDetail;
