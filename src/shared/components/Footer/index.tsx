'use server';

import { flexColumn, flexRow, flexRowCenter } from '@/styles/flex';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '../Modal';

type ModalKey = 'private' | 'terms' | 'email' | 'sitemap';

const Footer = () => {
  const snsData = [
    {
      id: 'instagram',
      url: '/instagram.png',
      link: 'https://www.instagram.com/ktwiz.pr/#',
    },
    {
      id: 'facebook',
      url: '/facebook.png',
      link: 'https://www.facebook.com/ktwiz',
    },
    {
      id: 'youtube',
      url: '/youtube.png',
      link: 'https://www.youtube.com/c/ktwiztv',
    },
    { id: 'naver', url: '/naver.png', link: 'https://tv.naver.com/ktwiz' },
  ] as const;

  const navData: { id: ModalKey; text: string }[] = [
    { id: 'private', text: '개인정보 처리방침' },
    { id: 'terms', text: '이용약관' },
    { id: 'email', text: '이메일무단수집거부' },
    { id: 'sitemap', text: 'sitemap' },
  ];

  const modalData = {
    private: {
      title: '개인정보 수집·이용 동의',
      description: 'kt wiz는 팬들의 개인정보를 소중히 다루고 있습니다.',
      contents: (
        <div className={`h-[200px] text-center overflow-scroll`}>
          개인정보 수집 및 이용에 대한 안내 <br /> <br />본 개인정보취급방침은
          회사가 제공하는 kt sports 홈페이지 및 kt sports관련 제반 서비스 (kt
          sports, kt wiz, kt sonicboom 웹/앱 포함) 이용에 적용되며 다음과 같은
          내용을 담고 있습니다. sports, kt wiz, kt sonicboom 웹/앱 포함) 이용에
          적용되며 다음과 같은 내용을 담고 있습니다.
        </div>
      ),
    },
    terms: {
      title: 'terms title',
      description: 'kt wiz는 팬들의 개인정보를 소중히 다루고 있습니다.',
      contents: (
        <div className={`h-[200px] text-center overflow-scroll`}>
          개인정보 수집 및 이용에 대한 안내 <br /> <br />본 개인정보취급방침은
          회사가 제공하는 kt sports 홈페이지 및 kt sports관련 제반 서비스 (kt
          sports, kt wiz, kt sonicboom 웹/앱 포함) 이용에 적용되며 다음과 같은
          내용을 담고 있습니다.
        </div>
      ),
    },
    email: {
      title: 'email title',
      description: 'kt wiz는 팬들의 개인정보를 소중히 다루고 있습니다.',
      contents: (
        <div className={`h-[200px] text-center overflow-scroll`}>
          개인정보 수집 및 이용에 대한 안내 <br /> <br />본 개인정보취급방침은
          회사가 제공하는 kt sports 홈페이지 및 kt sports관련 제반 서비스 (kt
          sports, kt wiz, kt sonicboom 웹/앱 포함) 이용에 적용되며 다음과 같은
          내용을 담고 있습니다.
        </div>
      ),
    },
    sitemap: {
      title: 'sitemap title',
      description: 'kt wiz는 팬들의 개인정보를 소중히 다루고 있습니다.',
      contents: (
        <div className={`h-[200px] text-center overflow-scroll`}>
          개인정보 수집 및 이용에 대한 안내 <br /> <br />본 개인정보취급방침은
          회사가 제공하는 kt sports 홈페이지 및 kt sports관련 제반 서비스 (kt
          sports, kt wiz, kt sonicboom 웹/앱 포함) 이용에 적용되며 다음과 같은
          내용을 담고 있습니다.
        </div>
      ),
    },
  };

  return (
    <footer className={`m-auto w-full border-t-[1px] bg-white`}>
      <div
        className={`${flexRowCenter} gap-16 p-2 sm:p-8 sm:w-[1100px] w-[360px] m-auto`}
      >
        <Link href="/">
          <Image
            src={'/common/black_logo.svg'}
            alt="ktwiz black logo"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </Link>
        <div>
          <nav className="mb-6">
            <ul className={`${flexRow} gap-4 text-black font-bold`}>
              {navData.map((nav) => {
                const modalKey = modalData[nav.id];
                return (
                  <Modal
                    triggerElement={
                      <li
                        key={nav.id}
                        className={`${flexRowCenter} text-center w-[50px] sm:w-[125px] cursor-pointer`}
                      >
                        <span className="text-caption sm:text-sm">
                          {nav.text}
                        </span>
                      </li>
                    }
                    titleElement={modalKey.title}
                    description={modalKey.description}
                    children={modalKey.contents}
                  />
                );
              })}
            </ul>
          </nav>
          <article className={`${flexColumn} gap-2`}>
            <div className={`${flexRow} gap-2`}>
              <span className="w-[80px] text-turquoise text-caption sm:text-xs">
                대표번호
              </span>
              <div className={`${flexColumn}`}>
                <span className="text-caption sm:text-xs text-black font-bold">
                  1899-5916
                </span>
                <span className="text-caption sm:text-xs text-gray">
                  (운영시간: 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작 전까지,
                  월요일 및 주말 미경기 시 미운영)
                </span>
              </div>
            </div>
            <div className={`${flexRow} gap-2`}>
              <span className="w-[80px] text-turquoise text-caption sm:text-xs">
                주소
              </span>

              <span className="text-caption sm:text-xs text-black">
                경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크
              </span>
            </div>
            <span className="text-caption sm:text-xs text-gray">
              Copyright 2022 kt sports. All rights reserved.
            </span>
          </article>
        </div>

        <div className={`sm:${flexColumn} gap-8 sm:block hidden`}>
          {/* SelectBox - Kt 그룹사 및 관련사이트 */}
          <div
            className={`${flexRowCenter} w-[200px] h-[36px] border-[1px] border-gray rounded-sm curspr-pointer text-xs cursor-pointer`}
          >
            kt 그룹사 및 관련사이트
          </div>
          <div className={`${flexRow} gap-2 mt-8`}>
            {snsData.map((sns) => {
              return (
                <div
                  key={sns.id}
                  className={`${flexRowCenter} w-8 h-8 border-[1px] border-gray rounded-sm cursor-pointer`}
                >
                  <Link href={sns.link} target="_blank">
                    <Image src={sns.url} width={18} height={18} alt={sns.url} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
