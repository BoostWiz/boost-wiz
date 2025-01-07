import { flexRowSpaceBetween } from '@/styles/flex';
import BoxCell from './BoxCell';
import { useCalendarStore } from '@/store';
import useGetSchedule from '@/api/game/useGetSchedule';
import { ScheduleType } from '@/interface/game';

const CalendarContent = () => {
  const { year, month } = useCalendarStore();
  const { scheduleList } = useGetSchedule();

  const firstDay = new Date(+year, +month - 1, 1); // 해당 월의 1일
  const lastDay = new Date(+year, +month, 0); // 다음 달의 0일 (이달의 마지막 날)

  const startDayOfWeek = firstDay.getDay();
  const totalDays = lastDay.getDate();

  // 날짜 배열 생성: 시작 요일 앞에 빈칸 추가, 이후 날짜 채우기
  const dates = [
    ...Array(startDayOfWeek).fill(null), // 빈칸
    ...Array.from({ length: totalDays }, (_, i) => i + 1), // 1일부터 마지막 날까지
  ];

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const gameDataByDate = dates.map((date: string) => {
    if (!date) return null;

    const targetDate = `${year}${month.padStart(2, '0')}${date
      .toString()
      .padStart(2, '0')}`;

    return (
      scheduleList?.find(
        (game: ScheduleType) => game.displayDate === targetDate,
      ) || null
    );
  });

  return (
    <div className="border-t-[2px] border-black">
      <header className={`${flexRowSpaceBetween} my-4`}>
        {days.map((day, idx) => {
          return (
            <div
              key={day}
              className={`w-full ${
                idx === 0 ? 'text-primary' : 'text-black'
              } text-center`}
            >
              {day}
            </div>
          );
        })}
      </header>
      <section className="w-full grid grid-cols-7 gap-2">
        {dates.map((date, index) => (
          <BoxCell
            key={gameDataByDate[index] ? gameDataByDate[index].gmkey : index}
            date={date}
            data={gameDataByDate[index] ? gameDataByDate[index] : null}
          />
        ))}
      </section>
    </div>
  );
};

export default CalendarContent;
