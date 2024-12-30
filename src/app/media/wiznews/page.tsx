import Banner from '@/shared/components/Banner';
import WizNews from '@/components/WizNews';

export default function WizNewsPage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="wiz 뉴스"
          description="kt wiz의 새소식을 발빠르게 전해 드립니다."
        />
      </div>
      <WizNews/>
    </section>
  );
}