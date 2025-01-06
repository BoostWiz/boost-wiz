import Image from 'next/image';
import { flexColumn, flexRow, flexRowCenter } from '@/styles/flex';
import { toStringUsingDOMParser } from '@/shared/lib/toStringUsingDOMParser';
import { convertDateString } from '@/shared/lib/convertDateString';
import { CalendarDays, Eye } from 'lucide-react';
import Link from 'next/link';
import { NewsItemType } from '@/interface/media';

const NewsItem = ({ newsData, pathName }: NewsItemType) => {
  return (
    <Link href={`/media/${pathName}/${newsData.artcSeq}`} className={`${flexRow} h-[180px] gap-4 my-4 px-5 bg-[#ECEEF2] cursor-pointer rounded-lg shadow-lg shadow-slateGray`}>
      <div className={`${flexRowCenter} w-[23%] h-full`}>
        {
          newsData.imgFilePath ?
            (<Image src={newsData.imgFilePath} className={"rounded-lg h-[140px] shadow-xl"} alt={newsData.artcTitle} width="350" height="250" quality={75} />) :
            (<Image src="/images/media/news_thumb.png" className={"rounded-lg h-[140px] shadow-xl"} alt={newsData.artcTitle} width="350" height="250" quality={75} />)
        }
      </div>
      <div className={`${flexColumn} justify-center w-[75%] h-full gap-2`}>
        <div className="text-md">
          {newsData.artcTitle}
        </div>
        <div className="text-sm line-clamp-2 text-slateGray">
          {toStringUsingDOMParser(newsData.artcContents)}
        </div>
        <div className={`${flexRow} justify-end gap-2`}>
          <span className={`${flexRowCenter} text-xs text-slateGray`}>
            <CalendarDays color="#717781" className="h-4" />
            {convertDateString(newsData.regDttm)}
          </span>
          <span className={`${flexRowCenter} w-12 text-xs text-slateGray`}>
            <Eye color="#717781" className="h-4" />
            {newsData.viewCnt}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;