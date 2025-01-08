import HighlightVideo from '@/components/Home/HighlightVideo';
import HighlightVideoCell from '@/components/Home/HighlightVideoCell';
import GameInfo from '@/components/Home/GameInfo';
import TeamRank from '@/components/Home/TeamRank';

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] relative">
      {/* 첫 번째 컨테이너 */}
      <div
        className="w-full h-[1000px] bg-cover bg-center mb-[100px] relative"
        style={{
          backgroundImage: "url('/images/home/2024_post_bg_web.webp')",
        }}
      >
        <div className="absolute bottom-0 w-full h-[267px] pt-[45px] pb-[55px] bg-[rgba(0,0,0,0.2)]">
          {/* 자식 태그 내용 */}
          <div className="w-[1100px] h-[167px] flex flex-col mx-[91.5px] ">
            <div className="w-[56.5px] h-[19px] bg-gradient-custom rounded-[12px] text-[10px] text-white flex justify-center items-center mb-[16px]">
              위즈소식
            </div>
            <span className="text-[21px] text-white mb-[12px]">
              [안내] 2024 정규리그 홈경기 운영안내
            </span>
            <div className="w-[347px] h-[40px] text-[12px] text-gray mb-[15px]">
              안녕하세요, kt wiz 야구단입니다2024 정규리그 홈경기 운영
              안내드리며, 원활한 정규시즌 경기 관람을 위해 공지 내 내용을 확인
              부탁드립니다.
            </div>
            <div className="flex h-[48px] items-center gap-[4px]">
              <span className="text-[12px] text-white">자세히 보기</span>
              <img
                src="/images/home/arrow-right-white.svg"
                alt="arrow right white"
                className="w-[12px] h-[12px]"
              />
            </div>
          </div>
        </div>
      </div>

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
              <HighlightVideo index={0} />
            </div>
          </div>
        </div>
        <div className="flex w-full h-[190px] gap-[20px]">
          <div className="flex-1 bg-gradient-custom rounded-[20px] flex items-center cursor-pointer">
            <TeamRank />
            <img
              src="/images/home/banner-score.png"
              alt="game schedule"
              className="w-[161px] h-[131px] mr-[17px]"
            />
          </div>
          <div
            className="flex-1 h-full bg-cover bg-center rounded-[20px] flex items-center justify-center cursor-pointer"
            style={{
              backgroundImage: "url('/images/home/banner-parking.png')",
            }}
          >
            <div className="flex flex-col w-[440px] h-[90px] gap-[5px]">
              <span className="text-[13px] text-crimsonRed">
                수원 케이티 위즈 파크
              </span>
              <span className="text-[23px]">사전 주차 예약제 안내</span>
              <div className="flex w-full h-full items-center mt-[15px] gap-[3px]">
                <span className="text-[12px]">사전 주차 예약하기</span>
                <img
                  src="/images/home/arrow-right.png"
                  alt="arrow right"
                  className="w-[12px] h-[12px]"
                ></img>
              </div>
            </div>
          </div>
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
          <div className="w-full h-[616px] relative mb-[20px] rounded-[20px] overflow-hidden">
            <HighlightVideo index={0} />
          </div>
          <div className="flex w-full h-[263.5px] gap-[20px] mb-[40px]">
            <HighlightVideoCell index={0} />
            <HighlightVideoCell index={1} />
            <HighlightVideoCell index={2} />
            <HighlightVideoCell index={3} />
          </div>
          <button className="w-[354px] h-[49.5px] m-auto border border-darkBrown text-[15px] rounded-[8px] text-darkBrown">
            더 많은 영상보기
          </button>
        </div>
      </div>

      {/* 다섯 번째 컨테이너 */}
      <div className="w-[1100px] h-[309px] flex gap-[20px] mb-[160px] mx-auto">
        <a
          href="https://www.ktwizstore.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center bg-cover bg-center rounded-[20px] cursor-pointer"
          style={{
            backgroundImage: "url('/images/home/banner-store.png')",
          }}
        >
          <div className="w-[446px] flex flex-col">
            <img
              src="/images/home/ktwiz-logo-white.svg"
              alt="ktwiz logo white"
              className="w-[124px] h-[58px] mb-[3px]"
            />
            <span className="text-[20px] text-white mb-[15px]">
              공식 온라인 스토어
            </span>
            <span className="text-[13px] text-gray mb-[30px]">
              kt wiz의 익스클루시브한 아이템을 만나보세요!
            </span>
            <div className="flex h-[48px] items-center gap-[4px]">
              <span className="text-[12px] text-white">바로가기</span>
              <img
                src="/images/home/arrow-right-white.svg"
                alt="arrow right white"
                className="w-[12px] h-[12px]"
              />
            </div>
          </div>
        </a>
        <div
          className="flex-1 flex justify-center items-center bg-cover bg-center rounded-[20px] cursor-pointer"
          style={{
            backgroundImage: "url('/images/home/player-of-the-month.png')",
          }}
        >
          <div className="w-[446px] flex flex-col">
            <div className="flex h-[43px] gap-[2px] mb-[30px]">
              <img
                src="/images/home/ktwiz-logo-white.svg"
                alt="ktwiz logo white"
                className="w-[81px] h-[39px]"
              />
              <span className="self-end text-[15px] text-white">
                이달의 선수
              </span>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-[50px] text-crimsonRed mb-[-21px]">14</span>
              <span className="text-[50px] text-white">천성호</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
