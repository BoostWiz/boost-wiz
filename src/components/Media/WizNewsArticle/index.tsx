'use client';

import Header from '@/components/Media/Header';
import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId } from '@/interface/media';
import NewsArticle from '@/components/Media/NewsArticle';
import useGetNewsArticle from '@/api/media/useGetNewsArticle';

const WizNewsArticle = ({ newsId, articleId }: { newsId: NewsId, articleId: number }) => {

  const { newsArticleData } = useGetNewsArticle(articleId)

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items_news.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media/wiznews' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        {
          newsArticleData &&
          <NewsArticle articleData={newsArticleData}/>
        }
      </div>
    </div>
  );
}

export default WizNewsArticle;