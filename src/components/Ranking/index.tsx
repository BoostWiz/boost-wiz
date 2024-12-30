'use client';

import { useState } from 'react';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import { flexColumnCenter } from '@/styles/flex';

const Ranking = () => {
  const [currentTab, setCurrentTab] = useState('팀순위');
  const tabsData = ['팀순위', '투수순위', '타자순위', '관중현황'];

  return (
    <div className="container-default">
      <div className={`border-t-[2px] border-primary ${flexColumnCenter}`}>
        <TabsRoot
          value={currentTab}
          onValueChange={setCurrentTab}
          className="my-4"
        >
          <TabsList>
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                isActive={currentTab === tab}
                className={
                  currentTab == tab
                    ? 'text-md text-white bg-primary border-b-transparent rounded'
                    : 'text-md text-black'
                }
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </TabsRoot>
      </div>
    </div>
  );
};

export default Ranking;
