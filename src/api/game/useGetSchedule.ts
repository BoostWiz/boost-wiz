import { useCalendarStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetSchedule = () => {
  const { year, month } = useCalendarStore();
  const yearMonth = `${year}${month}`;

  const { data } = useQuery({
    queryKey: ['yearMonthSchedule', yearMonth],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/game/monthschedule?yearMonth=${yearMonth}`,
      );

      return response.data.data.list;
    },
  });

  return { scheduleList: data };
};

export default useGetSchedule;
