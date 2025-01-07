import { flexColumn, flexColumnCenter } from '@/styles/flex';

interface BannerProps {
  title: string;
  description: string;
  bgUrl?: string;
  navList?: React.ReactNode;
}

const Banner = ({
  title,
  description,
  bgUrl = '/common/banner.png',
  navList,
}: BannerProps) => {
  return (
    <div
      className={`${flexColumnCenter} w-screen h-[254px] relative text-center bg-cover bg-[position:60%]`}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div
        className={`${flexColumn} gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <h1 className="text-title text-white">{title}</h1>
        <span className="text-charcoal text-sm">{description}</span>
      </div>
      {navList && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {navList}
        </div>
      )}
    </div>
  );
};

export default Banner;
