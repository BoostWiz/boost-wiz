import ViewPoint from './ViewPoint';
import PitcherMatchup from './PitcherMatchup';
import LineUp from './LineUp';
import ChannelInfo from './ChannelInfo';
import WeatherInfo from './WeatherInfo';
import { flexRowSpaceBetween } from '@/styles/flex';
import pointData from '@/mocks/data/pointData.json';

const Point = () => {
  return (
    <div className="container-default">
      <div className="border-t-[2px] border-primary">
        <ViewPoint gameData={pointData.data} />
        <PitcherMatchup
          homeName={pointData.data.gameScore.home}
          visitName={pointData.data.gameScore.visit}
          homePitcher={pointData.data.homePitcher}
          visitPitcher={pointData.data.visitPitcher}
        />
        <LineUp
          homeInfo={{
            teamName: pointData.data.gameScore.home,
            teamLogo: pointData.data.gameScore.homeLogo,
          }}
          visitInfo={{
            teamName: pointData.data.gameScore.visit,
            teamLogo: pointData.data.gameScore.visitLogo,
          }}
          homeLineup={pointData.data.homeLineup}
          visitLineup={pointData.data.visitLineup}
        />
        <div className={`${flexRowSpaceBetween} my-10`}>
          <ChannelInfo
            broadcastInfo={pointData.data.schedule.current.broadcast}
          />
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default Point;
