'use client';

import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import Header from '@/components/Intro/Header';
import { flexColumn, flexColumnCenter, flexRowSpaceBetween } from '@/styles/flex';
import Image from 'next/image';

const WizParkIntro = () => {

  const calculatedBreadList = useMemo(() => {
    const item = navData['wizpark'].items.find((item) => item.id === 'intro');
    const breadList = [{ text: 'wizpark', router: '/wizpark/intro' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  return (
    <div className="container-default">
      <Header type="list" breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        <div className={`${flexRowSpaceBetween} mt-6 p-2 gap-4`}>
          <div className={`${flexColumn} justify-evenly basis-1/4`}>
            <div>
              <p className="text-xl text-jetBlack">Suwon <span className="text-primary">KT</span>
              </p>
              <p className="text-title text-jetBlack">Wiz Park</p>
            </div>
            <div>
              <p className="text-lg">복합 문화공간의 <span className="text-primary">첨단 야구장</span></p>
              <p className="text-lg"><span className="text-primary">수원 위즈파크</span>를 소개합니다.</p>
            </div>
            <div>
              <p className="mt-2 leading-relaxed text-md">
                위즈 파크는 경기도 수원시 장안구에 위치한 KBO 리그 KT 위즈의 홈구장으로,
                현대적인 시설과 쾌적한 관람 환경을 갖춘 복합 문화공간입니다.
                약 2만 명을 수용할 수 있는 이 야구장은 첨단 ICT 기술을 활용한 다양한 디지털 콘텐츠와 체험형 이벤트를 제공하며,
                익사이팅석, 캠핑존 등 독특한 관람석 옵션으로 특별한 야구 관람 경험을 선사합니다.
              </p>
            </div>
          </div>
          <div className="basis-3/4">
            <Image
              className="rounded-lg shadow-lg"
              src={'/images/wizpark/wizpark_intro.webp'}
              alt={'Wizpark Intro'} width={800} height={300} />
          </div>
        </div>
        <div className={`${flexColumn} mt-[100px]`}>
          <div>
            <p className="underline underline-offset-8 decoration-jetBlack text-lg">구장 소개</p>
          </div>
          <div className={`${flexRowSpaceBetween} mt-4`}>
            <div className="basis-3/4">
              <Image
                className="rounded-lg"
                src={'/images/wizpark/wizpark_tech.jpg'}
                alt={'Wizpark Intro'} width={800} height={300} />
            </div>
            <div className={`${flexColumn} justify-evenly basis-1/4`}>
              <div className="gap-2">
                <p className="sm text-primary">BIC Tainment</p>
                <p className="text-xl text-jetBlack">빅 테인먼트</p>
              </div>
              <div>
                <p className="mt-2 leading-relaxed text-lg">
                  다양한 디지털 콘텐츠와 체험형 이벤트를 제공하는
                  <span className="text-primary"> 복합 문화공간</span> 입니다.</p>
              </div>
              <div>
                <p className="mt-2 leading-relaxed text-md">
                  위즈 파크에서 사용되는 ‘빅 테인먼트(BIC Tainment)’ 기술은 KT 그룹의 첨단 ICT 기술을 활용하여
                  야구와 엔터테인먼트를 결합한 혁신적인 서비스입니다.
                  ‘BIC Tainment’는 Baseball, ICT(Information Communication Technology), Entertainment의 약자로,
                  야구 관람 경험을 더욱 풍부하고 편리하게 만들어주는 다양한 디지털 기술과 콘텐츠를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${flexColumn} mt-[100px]`}>
          <div>
            <p className="underline underline-offset-8 decoration-jetBlack text-lg">좌석 및 편의시설 안내</p>
          </div>
          <div className={`${flexColumnCenter} p-10 gap-4`}>
            <div>
              <Image
                className="rounded-lg"
                src={'/images/wizpark/wizpark_map.webp'}
                alt={'Wizpark Intro'} width={800} height={300} />
            </div>
            <div className={`${flexColumnCenter} w-[900px] h-[200px] bg-[#232323] rounded-lg`}>
              <Image
                className="rounded-lg"
                src={'/images/wizpark/wizpark_map_info.png'}
                alt={'Wizpark Intro'} width={800} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WizParkIntro;