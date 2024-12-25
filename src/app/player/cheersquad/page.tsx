import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function CoachStepPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="응원단"
          description="kt wiz꽃! kt wiz의 응원단"
          navData={navData['player'].items}
        />
      </div>
    </section>
  );
}
