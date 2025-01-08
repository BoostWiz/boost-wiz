'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface HighlightVideoCellProps {
  index: number; // 데이터 배열에서 참조할 인덱스
}

export default function HighlightVideoCell({ index }: HighlightVideoCellProps) {
  const [highlightData, setHighlightData] = useState<
    { contentsDate: string; artcTitle: string; videoLink: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlights = async () => {
      const BASE_URL =
        process.env.NEXT_PUBLIC_API_URL || 'https://www.ktwiz.co.kr';
      try {
        const res = await axios.get(
          `${BASE_URL}/api/media/highlightlist?count=10`,
        );

        const data =
          res.data.data.list?.map(
            (item: {
              contentsDate: string;
              artcTitle: string;
              videoLink: string;
            }) => ({
              contentsDate: item.contentsDate,
              artcTitle: item.artcTitle,
              videoLink: item.videoLink,
            }),
          ) || [];

        setHighlightData(data);
      } catch (error) {
        console.error('Error fetching highlight data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlights();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!highlightData[index]) {
    return <div>No data available</div>;
  }

  const { contentsDate, artcTitle, videoLink } = highlightData[index];

  // 날짜 포맷 변환 (2024-10-09 -> 2024년 10월 09일)
  const formattedDate = contentsDate
    .split('-') // 문자열을 '-'로 나눔
    .map((part, i) =>
      i === 0 ? `${part}년` : i === 1 ? `${part}월` : `${part}일`,
    )
    .join(' '); // 각각의 부분에 "년", "월", "일" 추가 후 합침

  return (
    <div className="flex flex-col">
      {/* 비디오 섹션 */}
      <div className="w-[260px] h-[146px] mb-[17px] rounded-[10px] overflow-hidden">
        <iframe
          src={`https://www.ktwiz.co.kr${videoLink}`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* 정보 섹션 */}
      <div className="flex w-full h-[19.5px] justify-between mb-[13px]">
        <div className="w-[66.6px] h-full bg-gradient-custom rounded-[12px] text-[10px] text-white flex justify-center items-center">
          하이라이트
        </div>
        <span className="text-[10px] h-[19.5px] text-gray flex items-center">
          {formattedDate}
        </span>
      </div>
      <div className="w-[260px] h-[48px] text-[15.5px] text-darkBrown">
        {artcTitle}
      </div>
    </div>
  );
}
