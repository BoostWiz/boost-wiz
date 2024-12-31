'use client';

import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId } from '@/interface/media';
import Header from './Header';

const WizNews = ({newsId} : {newsId: NewsId}) => {

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        <div>WizNewsPage</div>
      </div>
    </div>
  );
}

export default WizNews;