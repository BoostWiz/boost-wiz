import Ranking from '@/components/Ranking';
import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function RankingPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="관전포인트"
          description="오늘의 관전 포인트를 알려 드립니다."
          navData={navData['game'].items}
        />
      </div>
      <Ranking />
    </section>
  );
}
