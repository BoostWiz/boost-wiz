import { PlayerInfoType } from '@/interface/player';
import { Modal } from '@/shared/components';
import { flexColumn, flexRow } from '@/styles/flex';
import InfoDetail from './InfoDetail';

interface InfoListProps {
  data: PlayerInfoType[];
}

const Info = ({ player }: { player: PlayerInfoType }) => {
  return (
    <Modal
      triggerElement={
        <div
          className={`w-[250px] h-[250px] bg-cover cursor-pointer`}
          style={{ backgroundImage: `url(${player.backgroundUrl})` }}
        >
          <div className={`${flexColumn} items-end gap-1`}>
            <span className="text-primary">{player.position}</span>
            <span className="text-black text-lg">{player.playerName}</span>

            <div className={`${flexRow} text-black`}>
              <span>No.</span>
              <span>{player.backnum}</span>
            </div>
          </div>
        </div>
      }
      titleElement="선수 상세 정보"
      isClosedIcon={true}
      children={
        <section className={`${flexColumn} w-full`}>
          <InfoDetail pcode={player.pcode} />
        </section>
      }
    />
  );
};

const InfoList = ({ data }: InfoListProps) => {
  return (
    <section className={`${flexRow} gap-4 flex-wrap`}>
      {data.map((player) => {
        return <Info key={player.pcode} player={player} />;
      })}
    </section>
  );
};

export default InfoList;
