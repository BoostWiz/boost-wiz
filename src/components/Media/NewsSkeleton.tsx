import { flexColumn, flexRow, flexRowCenter } from '@/styles/flex';
import { Skeleton } from '@/shared/components/Skeleton';

const NewsSkeleton = ({count}: {count: number}) => {
  return (
    <div>
      {Array.from({ length: count }).map((_) => (
        <div
          className={`${flexRow} h-[180px] gap-4 my-4 px-5 bg-[#ECEEF2] cursor-pointer rounded-lg shadow-lg shadow-slateGray`}>
          <div className={`${flexRowCenter} w-[23%] h-full`}>
            <Skeleton className="w-[250px] h-[140px] rounded-lg shadow-xl" />
          </div>
          <div className={`${flexColumn} justify-center w-[75%] h-full gap-2`}>
            <Skeleton className="w-full h-[25px] rounded-lg shadow-xl" />
            <Skeleton className="w-full h-[45px] rounded-lg shadow-xl" />
            <div className={`${flexRow} justify-end gap-2`}>
              <Skeleton
                className={`${flexRowCenter} w-[85px] h-[20px] rounded-lg shadow-xl`} />
              <Skeleton
                className={`${flexRowCenter} w-[50px] h-[20px] rounded-lg shadow-xl`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSkeleton;