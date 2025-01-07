import React from 'react';
import { flexColumnCenter, flexRowSpaceBetween } from '@/styles/flex';
import Banner from '@/shared/components/Banner';
import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import Skeleton from '@/components/wiztv/Skeleton';

export default function WiztvLoading() {
  const tabsData = ['하이라이트', '선수 인터뷰', '선수 일상', '위즈 예능'];
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="위즈 티비"
          description="한국 프로 야구의 10번째 심장 kt wiz 야구단의 이야기입니다."
        />
      </div>
      <div className="container-default">
        <div className={`border-t-[2px] border-primary ${flexColumnCenter}`}>
          <TabsRoot
            value={'하이라이트'}
            onValueChange={() => {}}
            className="my-4"
          >
            <TabsList>
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  isActive={'하이라이트' === tab}
                  className={
                    '하이라이트' == tab
                      ? 'text-md text-white bg-primary border-b-transparent rounded'
                      : 'text-md text-black'
                  }
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </TabsRoot>
        </div>
        {/* 검색창 */}
        <div className="w-full my-4 h-16 bg-[#ECEEF2]/50 border-y border-y-[#ECEEF2]">
          <div className={`container-default !py-0 ${flexRowSpaceBetween}`}>
            <p className={`${flexColumnCenter} ml-3`}>
              위즈덕후가 되어 승리날의 덕아웃을 가장 가까이서 확인해보세요!
            </p>

            <div className={`w-[350px] flex  items-center text-sm mr-6`}>
              <p className="whitespace-nowrap mr-2 ">검색</p>
              <Input
                className="bg-white mr-1"
                placeholder="원하는 키워드로 검색하세요."
              />
              <Button>검색</Button>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 place-items-center">
          <Skeleton width="w-72" height="h-52" className="flex-1" />
          <Skeleton width="w-72" height="h-52" className="flex-1" />
          <Skeleton width="w-72" height="h-52" className="flex-1" />
        </div>
      </div>
    </section>
  );
}
