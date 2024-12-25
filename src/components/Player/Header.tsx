import { Breadcrumb } from '@/shared/components/Breadcrumb';
import { flexRowSpaceBetween } from '@/styles/flex';

const Header = ({
  breadList,
}: {
  breadList: { text: string; router: string }[];
}) => {
  return (
    <header className={`${flexRowSpaceBetween} mb-4`}>
      <div>Search Input Component</div>
      <Breadcrumb breadList={breadList} />
    </header>
  );
};

export default Header;
