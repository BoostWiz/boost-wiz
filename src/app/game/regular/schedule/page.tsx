import RegularSchedule from '@/components/RegularSchedule';
import Banner from '@/shared/components/Banner';

export default function RegularSchedulePage() {
  return (
    <section>
      <Banner
        title="정규 리그"
        description="kt wiz의 정규리그 결기 일정을 알려 드립니다."
      />
      <RegularSchedule />
    </section>
  );
}
