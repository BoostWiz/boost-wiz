'use client';

import CalendarContent from './Content';
import CalendarHeader from './Header';

const Calendar = () => {
  return (
    <section className="m-auto hidden sm:block">
      <CalendarHeader />
      <div className="mt-4">
        <CalendarContent />
      </div>
    </section>
  );
};

export default Calendar;
