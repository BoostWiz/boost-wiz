import { flexColumnCenter, flexRowCenter } from '@/styles/flex';

import FacebookIcon from '@/../public/sns/facebook.svg';
import XIcon from '@/../public/sns/x.svg';
import KakaoTalkIcon from '@/../public/sns/kakaotalk.svg';

const SocialMediaShare = () => {
  return (
    <div className={`${flexRowCenter} mt-4 gap-2 mb-4`}>
      <div className={`${flexColumnCenter} w-12 h-12 bg-white rounded cursor-pointer`}>
        <KakaoTalkIcon/>
      </div>
      <div className={`${flexColumnCenter} w-12 h-12 bg-white rounded cursor-pointer`}>
        <FacebookIcon/>
      </div>
      <div className={`${flexColumnCenter} w-12 h-12 bg-white rounded cursor-pointer`}>
        <XIcon/>
      </div>
    </div>
  );
}

export default SocialMediaShare;