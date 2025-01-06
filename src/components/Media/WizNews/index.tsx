'use client';

import { useEffect, useMemo, useState } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId, NewsItemData } from '@/interface/media';
import Header from '../Header';
import PaginationFooter from '@/shared/components/Pagination';
import useGetNewsList from '@/api/media/useGetNewsList';
import NewsItem from '@/components/Media/NewsItem';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useSearchNewsStore } from '@/store';
import NewsSkeleton from '@/components/Media/NewsSkeleton';

const WizNews = ({ newsId }: { newsId: NewsId }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const pageQuery = searchParams.get('page');
  const { searchName } = useSearchNewsStore();
  const totalPages = searchName ? useGetNewsList(1, "total", searchName).newsData : useGetNewsList(1, "total").newsData;

  const handleCurrentPageChange = (page: number) => {
    setCurrentPage(page);
  }

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
    if (currentPage === 1 && pageQuery) {
      handleCurrentPageChange(Number(pageQuery));
      router.push(`${pathName}?page=${pageQuery}`);
    } else {
      router.push(`${pathName}?page=${currentPage}`);
    }
  }, [currentPage]);

  const { newsData } = useGetNewsList(currentPage, 'page', searchName);

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
          currentPage={currentPage}
          handlePage={handleCurrentPageChange}/>
      </div>
    </div>
  );
};

export default WizNews;