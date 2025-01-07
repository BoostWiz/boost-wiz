'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface HighlightVideoProps {
  count: number;
}

export default function HighlightVideo({ count }: HighlightVideoProps) {
  const [highlightData, setHighlightData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlights = async () => {
      const BASE_URL =
        process.env.NEXT_PUBLIC_API_URL || 'https://www.ktwiz.co.kr';
      try {
        const res = await axios.get(
          `${BASE_URL}/api/media/highlightlist?count=${count}`,
        );

        const videoLinks =
          res.data.data.list
            ?.slice(0, count)
            .map((item: { videoLink: string }) => item.videoLink) || [];

        setHighlightData(videoLinks);
      } catch (error) {
        console.error('Error during fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlights();
  }, [count]);

  if (loading) {
    return <div>Loading highlight videos...</div>;
  }

  if (highlightData.length === 0) {
    return <div>No highlight videos available.</div>;
  }

  return (
    <div>
      {highlightData.map((videoLink, index) => (
        <iframe
          key={index}
          src={`https://www.ktwiz.co.kr${videoLink}`} // 비디오 임베드 URL
          className="absolute top-0 left-0 w-full h-full" // 부모 요소 꽉 차게 설정
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ))}
    </div>
  );
}
