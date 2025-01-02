import React from 'react';
import Link from 'next/link';
import Card from './card';

export default function WizStoryContainer({ data }: WizStoryContainerProps) {
  // 데이터 정렬
  const sortedList = [...data.list].sort((a, b) => {
    return (
      new Date(b.contentsDate).getTime() - new Date(a.contentsDate).getTime()
    );
  });

  return (
    <div className="container-default">
      <div className="border-t-[2px] border-primary">
        <div className="w-full grid grid-cols-3 ">
          {sortedList.map((item: any) => (
            <Link href="/" key={item.artcSeq}>
              <Card
                imgSrc={item.imgFilePath || '/common/banner.png'}
                Title={item.artcTitle || '영상 제목!'}
                contents={item.contents || '영상설명!'}
                progress={30}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
