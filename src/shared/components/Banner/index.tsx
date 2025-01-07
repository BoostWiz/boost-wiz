'use client';

import { flexColumn, flexColumnCenter } from '@/styles/flex';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs } from '../Tabs';

interface BannerProps {
  title: string;
  description: string;
  bgUrl?: string;
  navData?: { id: string; text: string; router?: string }[];
}

const Banner = ({
  title,
  description,
  bgUrl = '/common/banner.png',
  navData,
}: BannerProps) => {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(
    navData ? (navData?.find((d) => d.text === title)?.text as string) : '',
  );

  const handleGoRouter = (selectText: string) => {
    setCurrentTab(selectText);
    const goRouter = navData?.find((nav) => nav.text === selectText)
      ?.router as string;

    router.push(goRouter);
  };

  return (
    <div
      className={`${flexColumnCenter} w-screen h-[254px] relative text-center bg-cover bg-[position:60%]`}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div
        className={`${flexColumn} gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <h1 className="text-title text-white">{title}</h1>
        <span className="text-charcoal text-sm">{description}</span>
      </div>
      {navData && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <Tabs
            currentTab={currentTab}
            onTabChange={handleGoRouter}
            tabsData={navData.map((nav) => nav.text)}
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
