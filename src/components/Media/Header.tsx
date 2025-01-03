import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { flexRowSpaceBetween } from '@/styles/flex';
import SearchBar from '@/components/Media/SearchBar';


const Header = ({
                  type, breadList,
                }: {
  type?: string, breadList: { text: string; router: string }[];
}) => {
  return (
    <header className={`${flexRowSpaceBetween} mb-4`}>
      <div>
        {
          type === 'list'
          ? <SearchBar /> : null
        }
      </div>
      <div className="mt-2">
        <Breadcrumb breadList={breadList} />
      </div>
    </header>
  );
};

export default Header;
