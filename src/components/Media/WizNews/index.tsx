'use client';

import { useMemo, useState } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId, NewsItemData } from '@/interface/media';
import Header from '../Header';
import PaginationFooter from '@/shared/components/Pagination';
import useGetNewsList from '@/api/media/useGetNewsList';
import NewsItem from '@/components/Media/NewsItem';
import useGetNewsSearchCount from '@/api/media/useGetNewsSearchCount';

const WizNews = ({ newsId }: { newsId: NewsId }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const { newsData } = useGetNewsList(currentPage);
  const totalPages = useGetNewsSearchCount().totalPage;

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items_news.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  const calculatedPageList = (totalPages: number) => {
    return Math.round(totalPages / 5);
  }

  return (
    <div className="container-default">
      <Header type="list" breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        {newsData && newsData.map((newsItem: NewsItemData) => (
          <NewsItem newsData={newsItem}/>
        ))}
      </div>
      <div className="mt-10">
        <PaginationFooter
          totalPages={calculatedPageList(totalPages)}
          currentPage={currentPage}
          handlePage={setCurrentPage}
          searchPageUrl={"media/wiznews?search-page"}/>
      </div>
    </div>
  );
};

export default WizNews;