'use client';

import { flexColumn, flexRow } from '@/styles/flex';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { bgBlackCss, homeCss, hoverCss, navData } from './constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileHeader from './MobileHeader';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  const [isHover, setIsHover] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const currentCss = pathname === '/' ? homeCss : bgBlackCss;

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header
      className={`${
        isHover ? hoverCss['header'] : currentCss['header']
      } fixed top-0 w-full group  transition-colors duration-300 cursor-pointer z-50`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${flexRow} ${
          isHover && 'border-b-[1px] border-lightGray'
        } gap-16 items-center m-auto sm:w-[1100px] w-[360px]`}
      >
        <Link href="/">
          <Image
            src={isHover ? hoverCss['logo'] : currentCss['logo']}
            alt="ktwiz white logo"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </Link>
        <nav className="w-full">
          <ul className={`${flexRow} justify-between`}>
            {Object.entries(navData).map(([key, nav]) => {
              return (
                <li
                  id={key}
                  className={`${
                    isHover ? hoverCss['nav'] : currentCss['nav']
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
                isHover ? hoverCss['button'] : currentCss['button']
              } transition-colors duration-300`}
            >
              <span
                className={`${isHover ? hoverCss['text'] : currentCss['text']}`}
              >
                회원가입
              </span>
            </Button>
          </Link>
          <Link href="/login">
            <Button
              className={`${
                isHover ? hoverCss['button'] : currentCss['button']
              } transition-colors duration-300`}
            >
              <span
                className={`${isHover ? hoverCss['text'] : currentCss['text']}`}
              >
                로그인
              </span>
            </Button>
          </Link>
        </div>
      </div>
      {isHover && (
        <div className={`w-[910px] ${flexRow} m-auto`}>
          {Object.entries(navData).map(([key, nav]) => {
            return (
              <ul
                key={key}
                className={`${flexColumn} gap-2 w-[158px] py-4 text-center border-l-[1px] border-lightGray`}
              >
                {nav.items.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`${
                        isHover ? hoverCss['liItem'] : currentCss['liItem']
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
