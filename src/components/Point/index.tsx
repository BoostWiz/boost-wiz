import ViewPoint from './ViewPoint';
import PitcherMatchup from './PitcherMatchup';
import LineUp from './LineUp';
import ChannelInfo from './ChannelInfo';
import WeatherInfo from './WeatherInfo';
import { flexRowSpaceBetween } from '@/styles/flex';
import { pointType } from '@/interface/point';
import pointJSON from '@/mocks/data/pointData.json';

const Point = () => {
  const pointData: pointType = pointJSON.data as pointType;

  return (
    <div className="container-default">
      <div className="border-t-[2px] border-primary">
        <ViewPoint gameData={pointData} />
        <PitcherMatchup
          homeName={pointData.gameScore.home}
          visitName={pointData.gameScore.visit}
          homePitcher={pointData.homePitcher}
          visitPitcher={pointData.visitPitcher}
        />
        <LineUp
          homeInfo={{
            teamName: pointData.gameScore.home,
            teamLogo: pointData.gameScore.homeLogo,
          }}
          visitInfo={{
            teamName: pointData.gameScore.visit,
            teamLogo: pointData.gameScore.visitLogo,
          }}
          homeLineup={pointData.homeLineup}
          visitLineup={pointData.visitLineup}
        />
        <div className={`${flexRowSpaceBetween} my-10`}>
          <ChannelInfo broadcastInfo={pointData.schedule.current.broadcast} />
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default Point;
