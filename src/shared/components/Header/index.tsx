'use client';

import { flexColumn, flexRow } from '@/styles/flex';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';
import { useState } from 'react';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

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

  return (
    <header
      className="fixed top-0 w-full bg-transparent group hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${flexRow} gap-16 items-center m-auto w-[1100px] border-b-[1px] border-lightGray`}
      >
        <Link href="/">
          <Image
            src={isHover ? '/common/black_logo.svg' : '/common/white_logo.svg'}
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
                  className="w-[90px] text-center text-white font-bold group-hover:text-black transition-colors duration-300"
                >
                  {nav.text}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={`${flexRow} gap-4`}>
          <Link href="/signup">
            <Button className="bg-white group-hover:bg-gray-300 group-hover:bg-black transition-colors duration-300">
              <span className="text-black group-hover:text-white">
                회원가입
              </span>
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-white group-hover:bg-gray-300 group-hover:bg-black transition-colors duration-300">
              <span className="text-black group-hover:text-white">로그인</span>
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
                className={`${flexColumn} gap-2 w-[160px] py-4 text-center border-l-[1px] border-lightGray`}
              >
                {nav.items.map((item) => {
                  return (
                    <li key={item.id} className="hover:font-bold">
                      <Link href={item.router}>{item.text}</Link>
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
