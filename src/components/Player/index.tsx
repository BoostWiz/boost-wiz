'use client';

import InfoList from './InfoList';
import { useMemo } from 'react';

import Header from './Header';
import { navData } from '@/shared/components/Header/constants';
import {
  PlayerDetailType,
  PlayerIdType,
  PlayerIdWithoutCheerleader,
} from '@/interface/player';
import useGetPlayer from '@/api/player/useGetPlayer';
import { flexRowCenter } from '@/styles/flex';

const Player = ({ playerId }: { playerId: PlayerIdType }) => {
  const playerDetailKeyData: Record<
    PlayerIdWithoutCheerleader,
    PlayerDetailType
  > = {
    coachlist: 'coachdetail',
    pitcherlist: 'pitcherdetail',
    catcherlist: 'catcherdetail',
    infielderlist: 'infielderdetail',
  };

  const { players } = useGetPlayer(playerId);

  const calculatedBreadList = useMemo(() => {
    const item = navData['player'].items.find((item) => item.id === playerId);
    const breadList = [{ text: 'player', router: '/player/coachlist' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        <div className="py-12">
          {players ? (
            <InfoList
              data={players}
              playerDetailType={
                playerDetailKeyData[playerId as PlayerIdWithoutCheerleader]
              }
            />
          ) : (
            <div className={`${flexRowCenter}`}>데이터 준비중입니다...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
