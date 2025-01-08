import { flexColumnCenter, flexRowCenter } from '@/styles/flex';

import FacebookIcon from '@/../public/sns/facebook.svg';
import XIcon from '@/../public/sns/x.svg';
import KakaoTalkIcon from '@/../public/sns/kakaotalk.svg';

const SocialMediaShare = () => {
  return (
    <div className={`${flexRowCenter} mt-4 gap-4 mb-4`}>
      <div className={`${flexColumnCenter} w-12 h-12 bg-[#FAE103] border-[1px] rounded cursor-pointer`}>
        <KakaoTalkIcon color={'#3B1E1E'} width={30} height={30} />
      </div>
      <div className={`${flexColumnCenter} w-12 h-12 bg-[#F2F4F7] border-[1px] rounded cursor-pointer`}>
        <FacebookIcon color={'#0866FF'} width={30} height={30} />
      </div>
      <div className={`${flexColumnCenter} w-12 h-12 bg-[#000000] border-[1px] rounded cursor-pointer`}>
        <XIcon color={'#E7E9EA'} width={30} height={30} />
      </div>
    </div>
  );
}

export default SocialMediaShare;