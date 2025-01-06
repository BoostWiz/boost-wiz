'use client';

import { useEffect, useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId, NewsItemData } from '@/interface/media';
import Header from '../Header';
import PaginationFooter from '@/shared/components/Pagination';
import useGetNewsList from '@/api/media/useGetNewsList';
import NewsItem from '@/components/Media/NewsItem';
import { useSearchParams } from 'next/navigation';
import { usePageStore, useSearchNewsStore } from '@/store';
import NewsSkeleton from '@/components/Media/NewsSkeleton';

const WizNews = ({ newsId }: { newsId: NewsId }) => {

  const searchParams = useSearchParams();

  const { searchName } = useSearchNewsStore();
  const { page, setPage } = usePageStore();
  const totalPages = searchName ? useGetNewsList(1, "total", searchName).newsData : useGetNewsList(1, "total").newsData;

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items_news.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media/wiznews' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  const calculatedPageList = (totalPages: number) => {
    return Math.round(totalPages / 5);
  }

  useEffect(() => {
    const queryPage = Number(searchParams.get('page')) || 1;

    if (queryPage !== page) {
      setPage(queryPage); // 상태 업데이트
    }
  }, [searchParams.get('page')]);

  const handlePageChange = (newPage: any) => {
    if (newPage !== page) {
      setPage(newPage);

      // URL 변경
      const newUrl =
        newPage === 1
          ? "/media/wiznews"
          : `/media/wiznews?page=${newPage}`;
      window.history.pushState(null, "", newUrl);
    }
  };

  const { newsData } = useGetNewsList(page, 'page', searchName);

  return (
    <div className="container-default">
      <Header type="list" breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        {
          newsData ? newsData.map((newsItem: NewsItemData) => (
          <NewsItem key={crypto.randomUUID()} newsData={newsItem} pathName={'wiznews'} />)) :
            [...Array(5)].map((_) => (
              <NewsSkeleton key={crypto.randomUUID()} />
            ))
        }
      </div>
      <div className="mt-10">
        <PaginationFooter
          totalPages={calculatedPageList(totalPages)}
          currentPage={page}
          handlePage={handlePageChange}/>
      </div>
    </div>
  );
};

export default WizNews;