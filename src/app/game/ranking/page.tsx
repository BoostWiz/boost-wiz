import Ranking from '@/components/Ranking';
import Banner from '@/shared/components/Banner';

export default function RankingPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="순위기록"
          description="오늘의 관전 포인트를 알려 드립니다."
        />
      </div>
      <Ranking />
    </section>
  );
}
