import { Breadcrumb } from '@/shared/components/Breadcrumb';


const Header = ({
                  breadList,
                }: {
  type?: string, breadList: { text: string; router: string }[];
}) => {
  return (
    <header className={`flex justify-end mb-4`}>
      <div className="mt-2">
        <Breadcrumb breadList={breadList} />
      </div>
    </header>
  );
};

export default Header;
