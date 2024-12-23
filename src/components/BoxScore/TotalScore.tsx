import { flexColumnCenter, flexRow, flexRowCenter } from '@/styles/flex';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 박스스코어 제일 위에 위치한 경기 정보 요약이 들어가는 컴포넌트
const TotalScore = () => {
  return (
    <div className={`${flexRow} h-[250px] bg-[#ECEEF2]/50`}>
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronLeft size={50} />
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[90%] w-[80%]`}>
        {/* 첫번째팀 정보 */}
        <div className={`${flexRowCenter} h-[55%] w-full`}>
          <div className={`${flexRowCenter} w-[30%] h-full`}>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-2xl">KT</p>
              <p className="text-sm">승 - 김민</p>
            </div>
            <div className="w-[30%] text-center">로고</div>
            <div className="w-[30%] text-center font-bold text-5xl">3</div>
          </div>
          {/* 경기장, 경기일자 */}
          <div
            className={`${flexColumnCenter} w-[20%] h-full text-center text-sm`}
          >
            <p>2024.07.02</p>
            <p>수원</p>
          </div>
          {/* 두번째 팀 정보 */}
          <div className={`${flexRowCenter} w-[30%] h-full`}>
            <div className="w-[30%] text-center font-bold text-5xl">2</div>
            <div className="w-[30%] text-center">로고</div>
            <div className={`${flexColumnCenter} w-[30%] h-full`}>
              <p className="text-2xl">LG</p>
              <p className="text-sm">패 - 최원태</p>
            </div>
          </div>
        </div>
        <div className="h-[45%] w-full text-center">점수 표가 들어갈 자리</div>
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronRight size={50} />
      </div>
    </div>
  );
};

export default TotalScore;
