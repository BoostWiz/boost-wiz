'use client';

import { useState } from 'react';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import { flexColumnCenter } from '@/styles/flex';
import TeamRanking from './TeamRanking';
import PitcherRanking from './PitcherRanking';
import BatterRanking from './BatterRanking';
import Attendance from './Attendance';

const Ranking = () => {
  const [currentTab, setCurrentTab] = useState('투수순위');
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
        {currentTab === '팀순위' && <TeamRanking />}
        {currentTab === '투수순위' && <PitcherRanking />}
        {currentTab === '타자순위' && <BatterRanking />}
        {currentTab === '관중현황' && <Attendance />}
      </div>
    </div>
  );
};

export default Ranking;
