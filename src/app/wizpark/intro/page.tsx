import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';
import WizParkIntro from '@/components/Intro';

export default function WizParkIntroPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="수원 kt 위즈파크"
          description="복합 문화공간의 첨단 야구장 수원 kt 위즈파크를 소개합니다!"
          navData={navData['wizpark'].items}
        />
      </div>
      <WizParkIntro/>
    </section>
  );
}