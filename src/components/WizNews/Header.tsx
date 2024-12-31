import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { flexRowSpaceBetween } from '@/styles/flex';
import SearchBar from '@/components/WizNews/SearchBar';


const Header = ({
                  breadList,
                }: {
  breadList: { text: string; router: string }[];
}) => {
  return (
    <header className={`${flexRowSpaceBetween} mb-4`}>
      <div>
        <SearchBar/>
      </div>
      <div className="mt-2">
        <Breadcrumb breadList={breadList} />
      </div>
    </header>
  );
};

export default Header;
