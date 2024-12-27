import Player from '@/components/Player';
import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function CoachStepPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="코칭스텝"
          description="최고의 kt wiz 코칭스텝을 소개합니다."
          navData={navData['player'].items}
        />
      </div>
      <Player playerId="coachstep" />
    </section>
  );
}
