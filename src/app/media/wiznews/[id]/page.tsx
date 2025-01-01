import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';
import WizNewsArticle from '@/components/Media/WizNewsArticle';
import newsMockData from '@/mocks/data/wiznews.json';

export default async function WizNewsArticlePage(
  { params }: {
    params: Promise<{ id: string }>;
  },
) {

  const {id} = await params;

  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="wiz 뉴스"
          description="kt wiz의 새소식을 발빠르게 전해 드립니다."
          navData={navData['media'].items_news}
        />
      </div>
      <div>
        <WizNewsArticle newsId="wiz_news" articleId={id} newsData={newsMockData.data.list}/>
      </div>
    </section>
  );
}