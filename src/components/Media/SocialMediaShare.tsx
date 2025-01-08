import { flexColumnCenter, flexRowCenter } from '@/styles/flex';

import FacebookIcon from '@/../public/sns/facebook.svg';
import XIcon from '@/../public/sns/x.svg';
import KakaoTalkIcon from '@/../public/sns/kakaotalk.svg';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { KakaoShareData } from '@/interface/media';

const SocialMediaShare = ({ artcTitle, artcContents, imgFilePath }: KakaoShareData) => {

  // 현재 페이지 URL 가져오기
  const currentURL = String(window.location.href);

  // Twitter 공유
  function shareOnTwitter() {
    const twitterShareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}`;
    window.open(twitterShareURL, '_blank', 'width=800,height=400');
  }

  // Facebook 공유
  function shareOnFacebook() {
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
    window.open(facebookShareURL, '_blank', 'width=800,height=400');
  }

  function shareOnKakaoTalk() {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl,
          webUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl,
            webUrl,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl,
            webUrl,
          },
        },
      ],
    });
  }

  // 링크 복사
  function copyToClipboard() {
    navigator.clipboard.writeText(currentURL).then(() => {
      alert('클립보드에 링크를 복사했습니다 공유하세요!');
    }).catch(err => {
      console.error('링크 복사에 실패했습니다.: ', err);
    });
  }

  useEffect(() => {
    const loadKakaoSDK = () => {
      if (!window.Kakao) {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
        script.onload = () => {
          if (!window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
          }
        };
        document.head.appendChild(script);
      }
    };

    loadKakaoSDK();
  }, []);

  const title = String(artcTitle) || 'kt Wiz 야구단 - Official site'; // 기본값 설정
  const description = String(artcContents) || 'kt wiz는 2013년, 제 10구단에 대한 국민들의 강한 열망, 경기도 및 수원시 그리고 KT그룹의 뜨거운 유치 열정으로 비상한 솜씨와 비범한 재능을 가진 마법사,\n' +
    'wiz라는 이름으로 신비롭고 강력한 힘으로 상상의 야구를 실현하겠다는 의지를 가지고 새롭게 출범하였습니다.';
  const imageUrl = String(imgFilePath) || '@../public/images/media/news_thumbnail.png';
  const mobileWebUrl = String(window.location.href); // 현재 페이지 URL을 문자열로 변환
  const webUrl = String(window.location.href);

  return (
    <div className={`${flexRowCenter} mt-4 gap-4 mb-4`}>
      <div
        onClick={() => shareOnTwitter()}
        className={`${flexColumnCenter} w-12 h-12 bg-[#000000] border-[1px] rounded cursor-pointer`}>
        <XIcon color={'#E7E9EA'} width={30} height={30} />
      </div>
      <div
        onClick={() => shareOnFacebook()}
        className={`${flexColumnCenter} w-12 h-12 bg-[#F2F4F7] border-[1px] rounded cursor-pointer`}>
        <FacebookIcon color={'#0866FF'} width={30} height={30} />
      </div>
      <div
        onClick={() => shareOnKakaoTalk()}
        className={`${flexColumnCenter} w-12 h-12 bg-[#FAE103] border-[1px] rounded cursor-pointer`}>
        <KakaoTalkIcon color={'#3B1E1E'} width={30} height={30} />
      </div>
      <div
        onClick={() => copyToClipboard()}
        className={`${flexColumnCenter} w-12 h-12 bg-[#F2F4F7] border-[1px] rounded cursor-pointer`}>
        <SquareArrowOutUpRight className="w-[30px] h-[30px] text-[#000000]" />
      </div>
    </div>
  );
};

export default SocialMediaShare;