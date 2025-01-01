'use client';

import Header from '@/components/Media/Header';
import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import { NewsId } from '@/interface/media';
import NewsArticle from '@/components/Media/NewsArticle';

const WizNewsArticle = ({ newsId, articleId, newsData }: { newsId: NewsId, articleId: string, newsData: any }) => {

  const calculatedBreadList = useMemo(() => {
    const item = navData['media'].items_news.find((item) => item.id === newsId);
    const breadList = [{ text: 'media', router: '/media' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  const article = newsData.filter((item: any) => item.artcSeq === Number(articleId));

  return (
    <div className="container-default">
      <Header breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        <NewsArticle articleData={article[0]}/>
      </div>
    </div>
  );
}

export default WizNewsArticle;