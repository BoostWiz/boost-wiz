import Player from '@/components/Player';
import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function PitcherPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="투수"
          description="kt wiz의 자랑스런 투수들을 소개합니다."
          navData={navData['player'].items}
        />
      </div>
      <Player playerId="pitcherlist" />
    </section>
  );
}
