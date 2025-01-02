import ViewPoint from './ViewPoint';
import PitcherMatchup from './PitcherMatchup';
import LineUp from './LineUp';
import ChannelInfo from './ChannelInfo';
import WeatherInfo from './WeatherInfo';
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
        <LineUp />
        <div>
          <ChannelInfo />
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default Point;
