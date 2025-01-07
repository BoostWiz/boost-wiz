'use client';

import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import Header from '@/components/Intro/Header';

const WizParkLocation = () => {

  const calculatedBreadList = useMemo(() => {
    const item = navData['wizpark'].items.find((item) => item.id === 'location');
    const breadList = [{ text: 'wizpark', router: '/wizpark/location' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header type="list" breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        LocationPage
      </div>
    </div>
  );
}

export default WizParkLocation;