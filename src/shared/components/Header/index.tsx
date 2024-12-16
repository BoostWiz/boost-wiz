'use client';

import { flexColumn, flexRow } from '@/styles/flex';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const pathname = usePathname();

  const navData = [
    {
      id: 'ktwiz',
      text: 'kt wiz',
      router: '/',
      items: [
        { id: 'ktwiz?', text: 'kt wiz는?', router: '/' },
        { id: 'bi', text: '구단BI', router: '/' },
        { id: 'policy', text: '회원정책', router: '/user/policy' },
        { id: 'sponsor', text: '스폰서', router: '/sponsor' },
        { id: 'wallpaper', text: '월페이퍼', router: '/wallpaper' },
      ],
    },
    {
      id: 'wizpark',
      text: 'wiz park',
      router: '/wiz',
      items: [
        { id: 'suwon_ktwiz?', text: '수원 kt wiz', router: '/wiz/suwon' },
        { id: 'parking', text: '주차 예약', router: '/wiz/parking' },
        { id: 'find', text: '찾아오기', router: '/wiz/find' },
        { id: 'iksan', text: '익산야구장', router: '/wiz/iksan' },
      ],
    },
    {
      id: 'game',
      text: 'Game',
      router: '/game',
      items: [
        { id: 'regular', text: '정규 리그', router: '/game/regular' },
        { id: 'boxscore', text: '박스 스코어', router: '/game/boxscore' },
        { id: 'ranking', text: '순위 기록', router: '/game/ranking' },
        { id: 'point', text: '관전포인트', router: '/game/point' },
      ],
    },
    {
      id: 'player',
      text: 'Player',
      router: '/player',
      items: [
        { id: 'coach', text: '코칭스텝', router: '/player/coach' },
        { id: 'bowler', text: '투수', router: '/player/bowler' },
        { id: 'batter', text: '타자', router: '/player/batter' },
        { id: 'chher_squad', text: '응원단', router: '/player/cheer_squad' },
        { id: 'chher_song', text: '응원가', router: '/player/cheer_song' },
        { id: 'copyright', text: '응원가 저작권', router: '/player/copyright' },
      ],
    },
    {
      id: 'media',
      text: 'Media',
      router: '/media',
      items: [
        { id: 'wiz_news', text: 'wiz 뉴스', router: '/media/news' },
        { id: 'wiz_story', text: 'wiz 스토리', router: '/media/bstory' },
        { id: 'thrower_info', text: '시구자 정보', router: '/media/info' },
        { id: 'wiz_photo', text: 'wiz 포토', router: '/media/photo' },
      ],
    },
  ];

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const homeCss = {
    header: 'bg-transparent hover:text-black',
    logo: '/common/white_logo.svg',
    nav: 'text-white',
    button: 'bg-white',
    text: 'text-black',
    liItem: '',
  };

  const hoverCss = {
    header: 'hover:bg-white',
    logo: '/common/black_logo.svg',
    nav: 'text-black',
    button: 'group-hover:bg-black',
    text: 'group-hover:text-white',
    liItem: 'hover:font-bold',
  };

  // TODO: Scroll은 Ref로 특정 페이지에 달아줘서 제어해줘야 한다.
  const bgBlackCss = {
    header: 'bg-black hover:text-white',
    logo: '/common/white_logo.svg',
    nav: 'text-white',
    button: 'group-hover:bg-white',
    text: 'group-hover:text-black',
    liItem: 'hover:font-bold',
  };

  const currentCSS = pathname === '/' ? homeCss : bgBlackCss;

  return (
    <header
      className={`${
        isHover ? hoverCss['header'] : currentCSS['header']
      } fixed top-0 w-full group  transition-colors duration-300 cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${flexRow} gap-16 items-center m-auto w-[1100px] border-b-[1px] border-lightGray`}
      >
        <Link href="/">
          <Image
            src={isHover ? hoverCss['logo'] : currentCSS['logo']}
            alt="ktwiz white logo"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </Link>
        <nav className="w-full">
          <ul className={`${flexRow} justify-between`}>
            {navData.map((nav) => {
              return (
                <li
                  id={nav.id}
                  className={`${
                    isHover ? hoverCss['nav'] : currentCSS['nav']
                  } w-[90px] text-center font-bold transition-colors duration-300`}
                >
                  {nav.text}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={`${flexRow} gap-4`}>
          <Link href="/signup">
            <Button
              className={`${
                isHover ? hoverCss['button'] : currentCSS['button']
              } transition-colors duration-300`}
            >
              <span
                className={`${isHover ? hoverCss['text'] : currentCSS['text']}`}
              >
                회원가입
              </span>
            </Button>
          </Link>
          <Link href="/login">
            <Button
              className={`${
                isHover ? hoverCss['button'] : currentCSS['button']
              } transition-colors duration-300`}
            >
              <span
                className={`${isHover ? hoverCss['text'] : currentCSS['text']}`}
              >
                로그인
              </span>
            </Button>
          </Link>
        </div>
      </div>
      {isHover && (
        <div className={`w-[910px] ${flexRow} m-auto`}>
          {navData.map((nav) => {
            return (
              <ul
                key={nav.id}
                className={`${flexColumn} gap-2 w-[158px] py-4 text-center border-l-[1px] border-lightGray`}
              >
                {nav.items.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`${
                        isHover ? hoverCss['liItem'] : currentCSS['liItem']
                      }`}
                    >
                      <Link href={item.router} className="text-black">
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
