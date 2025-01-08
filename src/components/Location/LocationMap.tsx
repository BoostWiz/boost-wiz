import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import Link from 'next/link';
import { flexRowCenter } from '@/styles/flex';
import { SquareArrowOutUpRight } from 'lucide-react';

const LocationMap = () => {
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // kt 위즈파크 주소
        lat: 37.299728451363606,
        lng: 127.00977035386532,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
      className="rounded-lg border-[1px] border-lightGray"
    >
      <MapMarker // 마커를 생성합니다
        position={{
          lat: 37.299728451363606,
          lng: 127.00977035386532,
        }}
        image={{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
          size: {
            width: 64,
            height: 69,
          }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 27,
              y: 69,
            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          },
        }}
      />
      <CustomOverlayMap
        position={{
          lat: 37.299728451363606,
          lng: 127.00977035386530,
        }}
        // 커스텀 오버레이가에 대한 확장 옵션
        xAnchor={0.5}
        yAnchor={3.1}
      >
        <div className="customoverlay">
          <Link
            href="https://place.map.kakao.com/17577962"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative w-max p-2 bg-lightGray text-jetBlack rounded-lg">
              <div className={`${flexRowCenter} gap-1.5`}>
                <SquareArrowOutUpRight className="w-4 h-4" />
                <p className="align-middle">kt 위즈파크</p>
              </div>
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-lightGray"></div>
            </div>
          </Link>
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default LocationMap;