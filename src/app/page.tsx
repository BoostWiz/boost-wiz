import HighlightVideo from '@/components/Home/HighlightVideo';
import GameInfo from '@/components/Home/GameInfo';
import TeamRank from '@/components/Home/TeamRank';

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] relative">
      {/* 첫 번째 컨테이너 */}
      <div
        className="w-full h-[1000px] bg-cover bg-center mb-[100px]"
        style={{
          backgroundImage: "url('/images/home/2024_post_bg_web.webp')",
        }}
      ></div>

      {/* 두 번째 컨테이너 */}
      <div className="w-[1100px] h-[678px] bg-white mb-[145px] relative flex flex-col mx-auto gap-[80px]">
        {/* Game Schedule 이미지 */}
        <img
          src="/images/home/game-schedule.png"
          alt="game schedule"
          className="w-[826px] h-[140px] absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        <div className="w-full h-[303px] bg-white shadow-[0_30px_30px_rgba(245,50,50,.3)] rounded-[20px] mt-[105px] flex justify-center items-center z-[10]">
          <div className="flex w-[1020px] h-[222px] gap-[20px] mx-auto items-center">
            {/* GameInfo 컴포넌트 */}
            <GameInfo />
            <div className="w-[395px] h-full bg-white relative">
              {/* HighlightVideo 컴포넌트 */}
              <HighlightVideo count={1} />
            </div>
          </div>
        </div>
        <div className="flex w-full h-[190px] gap-[20px]">
          <div className="flex-1 bg-gradient-custom rounded-[20px] flex items-center">
            <TeamRank />
            <img
              src="/images/home/banner-score.png"
              alt="game schedule"
              className="w-[161px] h-[131px] mr-[17px]"
            />
          </div>
          <div
            className="flex-1 h-full bg-cover bg-center rounded-[20px]"
            style={{
              backgroundImage: "url('/images/home/banner-parking.png')",
            }}
          ></div>
        </div>
      </div>

      {/* 세 번째 컨테이너 */}
      <div className="w-[1100px] h-[1105px] mb-[123px] relative flex flex-col bg-white mx-auto">
        {/* Wiz Video 이미지 */}
        <img
          src="/images/home/wiz-video.png"
          alt="wiz video"
          className="w-[580px] h-[140px] absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        <div className="w-full h-[989px] relative flex flex-col mt-[115px] bg-white">
          <div className="w-full h-[616px] mb-[20px] bg-blue-500 rounded-[20px]"></div>
          <div className="w-full h-[263.5px] mb-[40px] bg-yellow-500"></div>
          <div className="w-full h-[49.5px] bg-black"></div>
        </div>
      </div>

      {/* 다섯 번째 컨테이너 */}
      <div className="w-[1100px] h-[309px] flex gap-[20px] mb-[160px] mx-auto">
        <div
          className="flex-1 h-full bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage: "url('/images/home/banner-store.png')",
          }}
        ></div>
        <div
          className="flex-1 h-full bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage: "url('/images/home/player-of-the-month.png')",
          }}
        ></div>
      </div>
    </div>
  );
}
