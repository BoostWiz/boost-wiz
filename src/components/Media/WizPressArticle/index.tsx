'use client';

import Header from '@/components/Media/Header';
import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId } from '@/interface/media';
import NewsArticle from '@/components/Media/NewsArticle';
import useGetPressArticle from '@/api/media/useGetPressArticle';

const WizPressArticle = ({ newsId, articleId }: { newsId: NewsId, articleId: number }) => {

  const { pressArticleData } = useGetPressArticle(articleId);

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items_news.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media/wizpress' }];

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
          pressArticleData &&
          <NewsArticle articleData={pressArticleData} pathName={'wizpress'} />
        }
      </div>
    </div>
  );
}

export default WizPressArticle;