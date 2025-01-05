'use client';

import { useMemo } from 'react';
import Header from '../Player/Header';
import InfoList from './InfoList';
import { navData } from '@/shared/components/Header/constants';

const Cheerleader = () => {
  const calculatedBreadList = useMemo(() => {
    const item = navData['player'].items.find(
      (item) => item.id === 'cheerleader',
    );
    const breadList = [{ text: 'player', router: '/player/coachlist' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header isSearch={false} breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        <div className="py-12">
          <InfoList />
        </div>
      </div>
    </div>
  );
};

export default Cheerleader;
