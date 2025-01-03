import GameInformationTitle from '../Game/GameInformationTitle';

const ChannelInfo = ({ broadcastInfo }: { broadcastInfo: string }) => {
  return (
    <div className="w-[50%]">
      <GameInformationTitle titleText="중계 채널" />
      <p className="mt-4">{broadcastInfo}</p>
    </div>
  );
};

export default ChannelInfo;
