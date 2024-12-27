import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { flexRowSpaceBetween } from '@/styles/flex';
import SearchInput from './SearchInput';

const Header = ({
  breadList,
}: {
  breadList: { text: string; router: string }[];
}) => {
  return (
    <header className={`${flexRowSpaceBetween} mb-4`}>
      <div>
        <SearchInput />
      </div>
      <div className="mt-2">
        <Breadcrumb breadList={breadList} />
      </div>
    </header>
  );
};

export default Header;
