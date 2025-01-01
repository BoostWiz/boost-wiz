import Banner from '@/shared/components/Banner';
import WizNews from '@/components/Media/WizNews';
import { navData } from '@/shared/components/Header/constants';
import newsMockData from '@/mocks/data/newslist.json';

export default function WizNewsPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="wiz 뉴스"
          description="kt wiz의 새소식을 발빠르게 전해 드립니다."
          navData={navData['media'].items_news}
        />
      </div>
      <WizNews newsId={"wiz_news"} newsData={newsMockData.data.list} />
    </section>
  );
}