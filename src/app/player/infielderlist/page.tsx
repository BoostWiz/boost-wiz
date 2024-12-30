import Player from '@/components/Player';
import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function InfielderPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="내야수"
          description="최고의 kt wiz 내야수를 소개합니다."
          navData={navData['player'].items}
        />
      </div>
      <Player playerId="infielderlist" />
    </section>
  );
}
