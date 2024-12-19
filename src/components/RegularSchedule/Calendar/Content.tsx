import { flexRowSpaceBetween } from '@/styles/flex';
import BoxCell from './BoxCell';
import { useCalendarStore } from '@/store';

const CalendarContent = () => {
  const { year, month } = useCalendarStore();

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

  // 임시 더미데이터 짝수만 데터 담기도록
  const gameDummyData = Array(31)
    .fill(null)
    .map((_, idx) => {
      const date = idx + 1;
      return date % 2 === 0 ? { date, game: `Game ${date}` } : null;
    });

  return (
    <div className="border-t-[2px] border-black">
      <header className={`${flexRowSpaceBetween} my-4`}>
        {days.map((day, idx) => {
          return (
            <div
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
            key={index}
            date={date}
            data={gameDummyData[index - 1] ? gameDummyData[index - 1] : null}
          />
        ))}
      </section>
    </div>
  );
};

export default CalendarContent;
