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

interface BoxCellProps {
  date: number;
  data: any; // BackEnd Data type 체크 필요
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
                  <OutcomeDisplay text="승" />
                  <span className="text-xs">11 : 5</span>
                </div>

                <ChevronRight size={12} />
              </div>
            </Link>
          </div>
          <div className="mt-4">
            <div className={`${flexRowCenter} gap-1`}>
              <div className={`${flexColumnCenter}`}>
                <div className="text-primary">H</div>
                <Image
                  src="/logo/ktwiz_logo.png"
                  alt="team logo"
                  width={50}
                  height={37}
                />
              </div>
              <span className="text-primary">VS</span>
              <div className={`${flexColumnCenter}`}>
                <div className="text-turquoise">A</div>
                <Image
                  src="/logo/lg_logo.png"
                  alt="team logo"
                  width={50}
                  height={37}
                />
              </div>
            </div>
          </div>
          <div className={`${flexColumnCenter}`}>
            <span className="text-primary text-xs">17:00 잠실</span>
            <span className="text-xs">SPO-T,MS-T,SS-T</span>
          </div>
        </>
      )}
    </div>
  );
};

export default BoxCell;
