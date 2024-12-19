import { flexColumn, flexRow } from '@/styles/flex';
import Link from 'next/link';
import { useState } from 'react';
import { navData } from './constants';
import { Button } from '../Button';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      <div className={`${flexRow} justify-between items-center p-4`}>
        <Button
          height="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          ☰
        </Button>
        <div className={`${flexRow} gap-4`}>
          <div className={`${flexRow}`}>
            <Link href="/signup">
              <Button
                height="sm"
                className={`transition-colors duration-300 text-xs`}
              >
                <span>회원가입</span>
              </Button>
            </Link>
            <Link href="/login">
              <Button
                height="sm"
                className={`transition-colors duration-300 text-xs`}
              >
                <span>로그인</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <nav className="bg-gray-800">
          <ul className={`${flexColumn} gap-2 p-4`}>
            {navData.map((nav) => (
              <li key={nav.id} className="text-white">
                <Link href={nav.router}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
