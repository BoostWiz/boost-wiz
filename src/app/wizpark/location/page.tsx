import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';
import WizParkLocation from '@/components/Location';

export default function WizParkLocationPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="찾아오기"
          description="수원 kt 위즈파크로 오시는 길을 알려드립니다."
          navData={navData['wizpark'].items}
        />
      </div>
      <WizParkLocation/>
    </section>
  );
}