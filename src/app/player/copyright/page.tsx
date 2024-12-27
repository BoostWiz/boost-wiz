import Banner from '@/shared/components/Banner';
import { navData } from '@/shared/components/Header/constants';

export default function CoachStepPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="응원가 저작권"
          description="응원가 저작권"
          navData={navData['player'].items}
        />
      </div>
    </section>
  );
}
