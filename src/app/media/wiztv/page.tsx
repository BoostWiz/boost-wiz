'use client';
import { useState } from 'react';
import Banner from '@/shared/components/Banner';
import { TabsRoot, TabsList, TabsTrigger } from '@/shared/components/Tabs';
import { flexColumnCenter } from '@/styles/flex';
import WiztvLoading from '@/components/wiztv/WiztvLoading';
import WiztvHighlight from '@/components/wiztv/WiztvHighlight';
import WiztvInterview from '@/components/wiztv/WiztvInterview';
import WiztvDaily from '@/components/wiztv/WiztvDaily';
import WiztvStory from '@/components/wiztv/WiztvStory';

export default function Wiztv() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState('하이라이트');
  const tabsData = ['하이라이트', '선수인터뷰', '선수 일상', '위즈 예능'];

  if (!loading) return <WiztvLoading />;

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
            value={currentTab}
            onValueChange={setCurrentTab}
            className="my-4"
          >
            <TabsList>
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  isActive={currentTab === tab}
                  className={
                    currentTab == tab
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

        {currentTab === '하이라이트' && <WiztvHighlight />}
        {currentTab === '선수인터뷰' && <WiztvInterview />}
        {currentTab === '선수 일상' && <WiztvDaily />}
        {currentTab === '위즈 예능' && <WiztvStory />}
      </div>
    </section>
  );
}
