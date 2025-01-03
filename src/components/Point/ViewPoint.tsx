import { flexColumnCenter, flexRow, flexRowCenter } from '@/styles/flex';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { pointType } from '@/interface/point';

interface propsType {
  gameData: pointType;
}

const ViewPoint = ({ gameData }: propsType) => {
  return (
    <div className={`${flexRow} h-[330px] bg-[#ECEEF2]/30 px-4`}>
      {/* 전날 경기 */}
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronLeft size={50} />
      </div>
      <div className={`${flexColumnCenter} h-full sm:w-[90%] w-[80%]`}>
        {/* 날짜 */}
        <p className="text-xl">{gameData.gameScore.displayDate}</p>
        <p className="p-0 text-xs text-gray">
          {gameData.gameScore.gtime} {gameData.gameScore.stadium}
        </p>
        {/* 팀이름 */}
        <div className={`${flexRowCenter} w-full gap-4 mb-2`}>
          <div className={`flex items-center justify-end w-[40%] gap-4`}>
            <div className={`${flexColumnCenter}`}>
              <p className="text-4xl">{gameData.gameScore.home}</p>
              <p>
                {gameData.gameScore.hscore}위{' '}
                <span className="text-gray">(홈)</span>
              </p>
            </div>
            <img
              src={gameData.gameScore.homeLogo}
              alt="home logo"
              className="w-28 h-28"
            />
          </div>
          <p className="text-xl mx-2">VS</p>
          <div className={`flex items-center justify-start w-[40%] gap-4`}>
            <img
              src={gameData.gameScore.visitLogo}
              alt="home logo"
              className="w-28 h-28"
            />
            <div className={`${flexColumnCenter}`}>
              <p className="text-4xl">{gameData.gameScore.visit}</p>
              <p>
                {gameData.gameScore.vscore}위{' '}
                <span className="text-gray">(원정)</span>
              </p>
            </div>
          </div>
        </div>
        {/* 시즌 성적 */}
        <div className={`${flexRowCenter} w-full gap-2 mb-2`}>
          <div className={`flex flex-col items-end w-[30%]`}>
            <div className="flex items-center justify-end gap-2">
              <div
                className={`h-2 bg-[#D60C0C] rounded`}
                style={{
                  width: `${Math.floor(Number(gameData.homeTeamRank.lra) * 100)}px`,
                }}
              />
              <p>{gameData.homeTeamRank.lra}</p>
            </div>
            <p className="text-xs text-gray">
              {gameData.homeTeamRank.win}승 {gameData.homeTeamRank.drawn}무{' '}
              {gameData.homeTeamRank.lose}패{'  '}
              <span className="text-[#D60C0C]">
                최근 {gameData.homeTeamRank.continue1}
              </span>
            </p>
          </div>
          <p className="mx-4 w-[7%] text-center">시즌 성적</p>
          <div className={`flex flex-col items-start w-[30%]`}>
            <div className="flex items-center justify-start gap-2">
              <p>{gameData.visitTeamRank.lra}</p>
              <div
                className={`h-2 bg-[#D60C0C] rounded`}
                style={{
                  width: `${Math.floor(Number(gameData.visitTeamRank.lra) * 100)}px`,
                }}
              />
            </div>
            <p className="text-xs text-gray">
              {gameData.visitTeamRank.win}승 {gameData.visitTeamRank.drawn}무{' '}
              {gameData.visitTeamRank.lose}패{'  '}
              <span className="text-[#D60C0C]">
                최근 {gameData.visitTeamRank.continue1}
              </span>
            </p>
          </div>
        </div>
        {/* 상대 성적 */}
        <div className={`${flexRowCenter} w-full gap-2`}>
          <div className={`flex flex-col items-end w-[30%]`}>
            <div className="flex items-center justify-end gap-2">
              <div
                className={`h-2 bg-[#D60C0C] rounded`}
                style={{
                  width: `${Math.floor(
                    Number(
                      (
                        gameData.homeTeamWinLose.win /
                        (gameData.homeTeamWinLose.win +
                          gameData.homeTeamWinLose.lose +
                          gameData.homeTeamWinLose.drawn)
                      ).toFixed(3),
                    ) * 100,
                  )}px`,
                }}
              />
              <p>
                {Number(
                  (
                    gameData.homeTeamWinLose.win /
                    (gameData.homeTeamWinLose.win +
                      gameData.homeTeamWinLose.lose +
                      gameData.homeTeamWinLose.drawn)
                  ).toFixed(3),
                )}
              </p>
            </div>
            <p className="text-xs text-gray">
              {gameData.homeTeamWinLose.win}승 {gameData.homeTeamWinLose.drawn}
              무 {gameData.homeTeamWinLose.lose}패
            </p>
          </div>
          <p className="mx-4 w-[7%] text-center">상대 전적</p>
          <div className={`flex flex-col items-start w-[30%]`}>
            <div className="flex items-center justify-start gap-2">
              <p>
                {Number(
                  (
                    gameData.visitTeamWinLose.win /
                    (gameData.visitTeamWinLose.win +
                      gameData.visitTeamWinLose.lose +
                      gameData.visitTeamWinLose.drawn)
                  ).toFixed(3),
                )}
              </p>
              <div
                className={`h-2 bg-[#D60C0C] rounded`}
                style={{
                  width: `${Math.floor(
                    Number(
                      (
                        gameData.visitTeamWinLose.win /
                        (gameData.visitTeamWinLose.win +
                          gameData.visitTeamWinLose.lose +
                          gameData.visitTeamWinLose.drawn)
                      ).toFixed(3),
                    ) * 100,
                  )}px`,
                }}
              />
            </div>
            <p className="text-xs text-gray">
              {gameData.visitTeamWinLose.win}승{' '}
              {gameData.visitTeamWinLose.drawn}무{' '}
              {gameData.visitTeamWinLose.lose}패
            </p>
          </div>
        </div>
      </div>

      {/* 다음 경기 */}
      <div className={`${flexColumnCenter} h-full sm:w-[5%] w-[10%]`}>
        <ChevronRight size={50} />
      </div>
    </div>
  );
};

export default ViewPoint;
