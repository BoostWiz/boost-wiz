'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface HighlightVideoProps {
  index: number; // 배열 인덱스 번호
}

export default function HighlightVideo({ index }: HighlightVideoProps) {
  const [highlightData, setHighlightData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlights = async () => {
      const BASE_URL =
        process.env.NEXT_PUBLIC_API_URL || 'https://www.ktwiz.co.kr';
      try {
        const res = await axios.get(
          `/api/media/highlightlist?count=10`, // 최대 10개의 비디오 호출
        );

        const videoLinks =
          res.data.data.list?.map(
            (item: { videoLink: string }) => item.videoLink,
          ) || [];

        setHighlightData(videoLinks);
      } catch (error) {
        console.error('Error during fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlights();
  }, []);

  if (loading) {
    return <div>Loading highlight video...</div>;
  }

  if (!highlightData[index]) {
    return <div>No highlight video available.</div>;
  }

  return (
    <div className="relative w-full h-full">
      <iframe
        src={`https://www.ktwiz.co.kr${highlightData[index]}`} // 인덱스에 해당하는 비디오 링크
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
