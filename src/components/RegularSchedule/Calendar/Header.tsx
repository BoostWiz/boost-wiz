'use client';

import { Button } from '@/shared/components';
import { flexColumn, flexRow, flexRowCenter } from '@/styles/flex';
import OutcomeDisplay from './OutcomeDisplay';
import { useState } from 'react';
import { Select } from '@/shared/components/Select';
import { useCalendarStore } from '@/store';

const CalendarHeader = () => {
  const { setYear, setMonth } = useCalendarStore();

  const [isAll, setIsAll] = useState(false);

  const YEARS = [
    '2025',
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
  ];
  const MONTHS = [
    '12',
    '11',
    '10',
    '09',
    '08',
    '07',
    '06',
    '05',
    '04',
    '03',
    '02',
    '01',
  ];

  const toggleAll = () => {
    setIsAll(() => !isAll);
  };

  return (
    <header
      className={`${flexColumn} gap-4 sm:flex-row sm:justify-between items-center`}
    >
      <div className={`${flexRow} gap-4`}>
        <Button
          variant={`${!isAll ? 'default' : 'outline'}`}
          onClick={toggleAll}
        >
          kt wiz 경기
        </Button>
        <Button
          variant={`${isAll ? 'default' : 'outline'}`}
          onClick={toggleAll}
        >
          전체 경기
        </Button>
      </div>
      <div className={`${flexRowCenter} gap-4`}>
        <div>
          <Select
            defaultText="2025"
            size="md"
            onSelect={setYear}
            itemList={YEARS.map((year) => ({ value: year, text: year }))}
          />
        </div>
        <div>
          <Select
            defaultText="01"
            size="sm"
            onSelect={setMonth}
            itemList={MONTHS.map((month) => ({ value: month, text: month }))}
          />
        </div>
      </div>
      <div className={`${flexRow} gap-2`}>
        <OutcomeDisplay text="승" />
        <OutcomeDisplay text="패" />
        <OutcomeDisplay text="무" />
      </div>
    </header>
  );
};

export default CalendarHeader;
