'use client';

import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId } from '@/interface/media';
import Header from '../Header';
import NewsPage from '@/components/Media/NewsPage';
import PaginationComponent from '@/shared/components/Pagination';

const WizNews = ({ newsId, newsData }: { newsId: NewsId, newsData: any }) => {

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items_news.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header type="list" breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        {
          newsData.slice(0, 5).map((item: any) => (
            <NewsPage newsData={item} />
          ))
        }
      </div>
      <div>
        <PaginationComponent/>
      </div>
    </div>
  );
};

export default WizNews;