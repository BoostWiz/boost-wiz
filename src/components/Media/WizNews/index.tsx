'use client';

import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId, NewsItemData } from '@/interface/media';
import Header from '../Header';
import PaginationComponent from '@/shared/components/Pagination';
import useGetNewsList from '@/api/media/useGetNewsList';
import NewsItem from '@/components/Media/NewsItem';

const WizNews = ({ newsId }: { newsId: NewsId }) => {

  const { newsData } = useGetNewsList(1);

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
        {newsData && newsData.map((newsItem: NewsItemData) => (
          <NewsItem newsData={newsItem}/>
        ))}
      </div>
      <div>
        <PaginationComponent/>
      </div>
    </div>
  );
};

export default WizNews;