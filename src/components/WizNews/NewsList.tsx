import Image from 'next/image';
import { flexColumn, flexRow, flexRowCenter } from '@/styles/flex';
import { toStringUsingDOMParser } from '@/shared/lib/toStringUsingDOMParser';
import { convertDateString } from '@/shared/lib/convertDateString';
import { CalendarDays, Eye } from 'lucide-react';

const NewsList = ({ newsData }: { newsData: any }) => {
  return (
    <div className={`${flexRow} h-[180px] gap-4 my-4 px-4 py-4 bg-[#ECEEF2] cursor-pointer rounded-lg shadow-lg`}>
      <div className={`${flexRowCenter} w-1/4 h-full`}>
        <Image src={newsData.imgFilePath} alt={newsData.artcTitle} width="350" height="250" quality={75} />
      </div>
      <div className={`${flexColumn} justify-center w-3/4 h-full gap-2`}>
        <div className="text-md">
          {newsData.artcTitle}
        </div>
        <div className="text-sm line-clamp-2 text-slateGray">
          {toStringUsingDOMParser(newsData.artcContents)}
        </div>
        <div className={`${flexRow} justify-end h-6 gap-2`}>
          <span className={`${flexRowCenter} text-xs text-slateGray`}><CalendarDays color="#717781"
                                                                                    className="h-4" />{convertDateString(newsData.regDttm)}</span>
          <span className={`${flexRowCenter} w-12 text-xs text-slateGray`}><Eye color="#717781"
                                                                           className="h-4" />{newsData.viewCnt}</span>
        </div>
        <div className="border-t-[1px] border-slateGray" />
      </div>
    </div>
  );
};

export default NewsList;