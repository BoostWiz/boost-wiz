import { flexColumnCenter, flexRowCenter } from '@/styles/flex';
import Image from 'next/image';
import Link from 'next/link';
import { ScheduleType } from '@/interface/game';

interface ScheduleCardProps {
  data: ScheduleType | null;
  isCenter: boolean;
}

const CardSchedule = ({ isCenter = false, data }: ScheduleCardProps) => {
  return (
    <div
      className={`w-full ${flexColumnCenter} gap-8 ${
        isCenter ? 'py-2 shadow-lg scale-110 z-10' : 'h-[320px] z-0 opacity-90'
      } rounded-sm border-[1px] border-slateGray bg-white cursor-pointer`}
    >
      {data === null ? (
        <div>
          <span>예정된 경기가 없습니다.</span>
        </div>
      ) : (
        <>
          <div className="px-3 py-1 bg-fireEngineRed rounded-3xl">
            <span className="text-sm text-white">{data.displayDate}</span>
          </div>
          <div></div>
          <div className={`${flexRowCenter} gap-8`}>
            <div className={`${flexColumnCenter} gap-2`}>
              <Image
                src={data.homeLogo}
                alt="team logo"
                width={100}
                height={75}
              />
              <span>{data.homeKey}</span>
              <span className="text-sm text-slateGray">선발:</span>
            </div>

            <div className={`${flexColumnCenter} gap-8`}>
              <span className="sm:text-xl">
                {data.visitScore} : {data.homeScore}
              </span>
              <span className="text-primary text-xl">승</span>
              <Link href="/">
                <div
                  className={`${flexRowCenter} px-2 py-1 bg-turquoise rounded-3xl`}
                >
                  <span className="text-caption text-white">경기정보</span>
                </div>
              </Link>
            </div>

            <div className={`${flexColumnCenter} gap-2`}>
              <Image
                src={data.visitLogo}
                alt="team logo"
                width={100}
                height={75}
              />
              <span>{data.visitKey}</span>
              <span className="text-sm text-slateGray">선발:</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSchedule;
