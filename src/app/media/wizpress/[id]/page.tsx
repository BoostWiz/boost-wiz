import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';
import WizPressArticle from '@/components/Media/WizPressArticle';

export default async function WizPressArticlePage(
  { params }: {
    params: Promise<{ id: number }>;
  },
) {

  const {id} = await params;

  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="wiz 보도자료"
          description="kt wiz의 새소식을 발빠르게 전해 드립니다."
          navData={navData['media'].items_news}
        />
      </div>
      <div>
        <WizPressArticle newsId="wiz_press" articleId={id} />
      </div>
    </section>
  );
}