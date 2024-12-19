'use client';

import { Button } from '@/shared/components';
import { flexRow, flexRowCenter, flexRowSpaceBetween } from '@/styles/flex';
import OutcomeDisplay from './OutcomeDisplay';
import { useState } from 'react';
import { Select } from '@/shared/components/Select';
import { useCalendarStore } from '@/store';

const CalendarHeader = () => {
  const { setYear, setMonth } = useCalendarStore();

  const [isAll, setIsAll] = useState(false);

  const YEARS = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
  ];
  const MONTHS = [
    '12',
    '11',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
  ];

  const toggleAll = () => {
    setIsAll(() => !isAll);
  };

  return (
    <header className={`${flexRowSpaceBetween} items-center`}>
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
            defaultText="2024"
            size="md"
            onSelect={setYear}
            itemList={YEARS.map((year) => ({ value: year, text: year }))}
          />
        </div>
        <div>
          <Select
            defaultText="12"
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
