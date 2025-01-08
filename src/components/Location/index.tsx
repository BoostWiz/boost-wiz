'use client';

import { useMemo } from 'react';
import { navData } from '@/shared/components/Header/constants';
import Header from '@/components/Intro/Header';
import useKakaoLoader from '@/api/wizpark/useKakaoLoader';
import LocationMap from '@/components/Location/LocationMap';
import { flexColumn, flexColumnCenter, flexRow, flexRowCenter } from '@/styles/flex';
import { BusFront, CarFront, MapPinCheck, TramFront } from 'lucide-react';
import { Button } from '@/shared/components';
import Link from 'next/link';

const WizParkLocation = () => {

  const calculatedBreadList = useMemo(() => {
    const item = navData['wizpark'].items.find((item) => item.id === 'location');
    const breadList = [{ text: 'wizpark', router: '/wizpark/location' }];

    if (item) {
      breadList.push({ text: item.text, router: item.router });
    }

    return breadList;
  }, []);

  useKakaoLoader();

  return (
    <div className="container-default">
      <Header type="list" breadList={calculatedBreadList} />
      <div className="border-t-[2px] border-primary">
        <div className="mt-4 h-[450px]">
          {/*<p className="mb-2 text-lg text-right underline underline-offset-8 decoration-jetBlack">*/}
          {/*  여러분을 <span className="text-primary">마법</span>같은 <span*/}
          {/*  className="text-primary">위즈파크</span>로 안내합니다!*/}
          {/*</p>*/}
          <p className="w-[250px] mb-2 px-2 py-1 text-xs text-jetBlack bg-lightGray rounded-full">※
            지도를 움직여 주변 정보를 확인해 보세요.</p>
          <LocationMap />
        </div>
        <div
          className={`${flexColumn} mt-[50px] h-[600px] border-[1px] border-lightGray rounded-lg`}>
        <div className={`${flexRow} basis-1/4`}>
            <div className={`${flexRowCenter} basis-1/5 gap-1 bg-lightGray`}>
              <MapPinCheck className="w-5 h-5 text-primary" />
              <p className="text-md">주소</p>
            </div>
            <div className={`${flexRowCenter} basis-4/5`}>
              <div className={`${flexColumnCenter} basis-2/4 p-4`}>
                <p className="text-md text-slateGray">주소 : 경기도 수원시 장안구 경수대로 893(조원동) 수원 케이티 위즈 파크 (구
                  : 경기도 수원시 장안구 조원동 775)</p>
              </div>
              <div className={`${flexColumn} basis-2/4 p-4 gap-1`}>
                <Button className="w-[120px] hover:bg-primary/70 text-xs" variant="active">
                  <Link
                    href={'https://map.naver.com/p/entry/place/13491582?placePath=%2Fhome&c=15.00,0,0,0,dh'}>네이버
                    지도 찾아오기</Link>
                </Button>
                <Button className="w-[120px] hover:bg-primary/70 text-xs" variant="active">
                  <Link href={'https://place.map.kakao.com/17577962'}>카카오 지도 찾아오기</Link>
                </Button>
                <p className="w-[300px] mt-2 px-2 py-1 text-xs text-jetBlack bg-lightGray rounded-full">※ 찾아오기 버튼을 통해서 상세한 정보를 안내드립니다.</p>
              </div>
            </div>
          </div>
          <div className={`${flexRow} basis-1/4 gap-1 border-t-[1px] border-lightGray`}>
            <div className={`${flexRowCenter} basis-1/5 gap-1 bg-lightGray`}>
              <CarFront className="w-5 h-5 text-primary" />
              <p className="text-md">자가용</p>
            </div>
            <div className="basis-4/5">
              <div className={`${flexRow} basis-2/4 p-4`}>
                <div className="leading-8">
                  <div className={`${flexRow} gap-2`}>
                    <p className="text-jetBlack">수원종합운동장 주차장</p>
                    <Button className="w-[80px] hover:bg-primary/70 text-xs" variant="active">
                      <Link
                        href={'https://suwonparkingbaseball.or.kr/suwonwps/EgovPageLink.do?link=main/menu/prs/ParkingReservationPrivacy'}>주차
                        예약</Link>
                    </Button>
                  </div>
                  <p className="text-xs leading-loose">프로야구 경기일에 <span className="text-primary">사전 예약제</span>로
                    운영됩니다. 이를 통해 미리 <span
                      className="text-primary">예약한 차량</span>만 <span
                      className="text-primary">주차</span>가 가능하며, 주차 공간이 제한적이므로 <span
                      className="text-primary">사전 예약</span>은 <span
                      className="text-primary">필수</span>입니다.
                  </p>
                  <div className="border-[1px] my-1 border-primary" />
                  <p className="mt-2 text-xs leading-loose">
                    <span className="p-1 text-lightGray bg-primary rounded-md">주차장 안내</span> 사전 예약을
                    놓쳤거나 만차인 경우 주변 주차장인 <span
                    className=" p-1 text-xs text-white bg-blue-500 rounded-full"> 장안구청 주차장</span>, <span
                    className=" p-1 text-xs text-white bg-emerald-500 rounded-full">만석공원 공영주차장</span>, <span
                    className="p-1 text-xs text-white bg-lime-500 rounded-full">홈플러스 북수원점</span> 을
                    이용하실 수 있습니다 자세한 사항은 해당 주차장 시설 관리사무실에 연락바랍니다.
                  </p>
                  <p className="mt-2 text-xs leading-loose">
                    <span className="p-1 text-white bg-primary rounded-md">고속도로 안내</span> 근접한
                    고속도로인 <span
                    className=" p-1 text-xs text-white bg-blue-500 rounded-full">경부고속도로</span>, <span
                    className=" p-1 text-xs text-white bg-emerald-500 rounded-full">용인-서울고속도로</span>, <span
                    className=" p-1 text-xs text-white bg-lime-500 rounded-full">수도권 제1순환고속도로</span>, <span
                    className=" p-1 text-xs text-white bg-fuchsia-500 rounded-full">수원-광명고속도로</span> 등을
                    통해서 접근하실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${flexRow} basis-1/4 gap-1 border-t-[1px] border-lightGray`}>
            <div className={`${flexRowCenter} basis-1/5 gap-1 bg-lightGray`}>
              <BusFront className="w-5 h-5 text-primary" />
              <p className="text-md">버스</p>
            </div>
            <div className="basis-4/5">
              <div className={`${flexColumn} basis-2/4 gap-2 p-4`}>
                <p><span className="p-1 text-white bg-[#3AAC16] rounded-md">일반</span> 25, 25-2, 27,
                  36, 55, 62-1, 99, 99-2, 300-1
                </p>
                <p><span className="p-1 text-white bg-[#3AAC16] rounded-md">일반</span> 310, 777</p>
                <p><span className="p-1 text-white bg-primary rounded-md">직행</span> 2007, 3000, 7770
                </p>
                <p><span className="p-1 text-white bg-[#3864CA] rounded-md">좌석</span> 300, 900</p>
              </div>
            </div>
          </div>
          <div className={`${flexRow} basis-1/4 gap-1 border-t-[1px] border-lightGray`}>
            <div className={`${flexRowCenter} basis-1/5 gap-1 bg-lightGray`}>
              <TramFront className="w-5 h-5 text-primary" />
              <p className="text-md">지하철</p>
            </div>
            <div className="basis-4/5">
              <div className={`${flexColumn} basis-2/4 gap-2 p-4`}>
                <p><span className="p-1 text-white bg-[#3AAC16] rounded-md">화서역</span> 하차 (택시로 10분)
                </p>
                <p className="text-xs">37, 39번 버스이용 수성중 사거리 하차 후 도보 3분</p>
                <p className="text-xs">55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분)</p>
                <p className="text-xs">1번, 5번, 8번 버스이용 수성중 사거리 하차 후 도보 3분</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizParkLocation;