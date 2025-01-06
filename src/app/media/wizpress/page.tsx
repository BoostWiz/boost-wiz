import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';
import WizPress from '@/components/Media/WizPress';

export default function WizPressPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="wiz 보도자료"
          description="kt wiz의 새소식을 발빠르게 전해 드립니다."
          navData={navData['media'].items_news}
        />
      </div>
      <WizPress newsId={"wiz_press"} />
    </section>
  );
}