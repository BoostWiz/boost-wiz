import {
  flexColumn,
  flexColumnCenter,
  flexRow,
  flexRowCenter,
  flexRowSpaceBetween,
} from '@/styles/flex';
import OutcomeDisplay from './OutcomeDisplay';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ScheduleType } from '@/interface/game';

interface BoxCellProps {
  date: number;
  data: ScheduleType | null;
}

const BoxCell = ({ date, data }: BoxCellProps) => {
  return (
    <div
      className={`w-full ${flexColumn} py-2 px-1 relative h-40 ${
        date ? 'bg-white' : 'bg-lightGray'
      } border border-slateGray rounded hover:bg-gray-200`}
    >
      <span className="absolute top-2 right-2 text-caption">{date}</span>
      {data && (
        <>
          <div>
            <Link href="/">
              <div
                className={`${flexRowSpaceBetween} items-center px-1 w-[100px] h-8 bg-lightGray rounded-lg`}
              >
                <div className={`${flexRow} items-center gap-2`}>
                  <OutcomeDisplay text={data.outcome} />
                  <span className="text-xs">
                    {data.homeScore} : {data.visitScore}
                  </span>
                </div>

                <ChevronRight size={12} />
              </div>
            </Link>
          </div>
          <div className="mt-1">
            <div className={`${flexRowCenter} gap-1`}>
              <div className={`${flexColumnCenter}`}>
                <div className="text-primary">H</div>
                <Image
                  src={data.homeLogo || ''}
                  alt="team logo"
                  width={50}
                  height={37}
                />
              </div>
              <span className="text-primary">VS</span>
              <div className={`${flexColumnCenter}`}>
                <div className="text-turquoise">A</div>
                <Image
                  src={data.visitLogo || ''}
                  alt="team logo"
                  width={50}
                  height={37}
                />
              </div>
            </div>
          </div>
          <div className={`${flexColumnCenter}`}>
            <span className="text-primary text-xs">
              {data.gtime} {data.stadium}
            </span>
            <span className="text-caption">{data.broadcast}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default BoxCell;
