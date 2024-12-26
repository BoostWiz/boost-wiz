import BoxScore from '@/components/BoxScore';
// import Banner from '@/shared/components/Banner';
import boxscoreData from '@/mocks/data/boxscore.json';

// todos: banner 수정
export default function BoxScorePage() {
  return (
    <section>
      <div className="mt-[100px]">
        {/* <Banner
          title="박스스코어"
          description="박스스코어 정보를 알려드립니다."
        /> */}
      </div>
      <BoxScore boxscoreData={boxscoreData.data} />
    </section>
  );
}
