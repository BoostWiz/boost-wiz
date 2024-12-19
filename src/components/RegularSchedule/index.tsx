import Calendar from './Calendar';
import CardScheduleList from './CardScheduleList';

const RegularSchedule = () => {
  // TODO: (year, month 파라미터로 담아서 useQuery 호출 데이터 받아오기)
  return (
    <div className="container-default">
      <div className="border-t-[2px] border-primary">
        <div className="py-12">
          <CardScheduleList />
          <div className="mt-24">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularSchedule;
