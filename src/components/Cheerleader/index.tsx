'use client';

import Header from '../Player/Header';
import InfoList from './InfoList';

const Cheerleader = () => {
  return (
    <div className="container-default">
      <Header
        isSearch={false}
        breadList={[
          { text: 'player', router: '/player' },
          { text: '응원단', router: '/player/cheerledaer' },
        ]}
      />
      <div className="border-t-[2px] border-primary">
        <div className="py-12">
          <InfoList />
        </div>
      </div>
    </div>
  );
};

export default Cheerleader;
