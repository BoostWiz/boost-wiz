import { useState } from 'react';
import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import { flexRowCenter } from '@/styles/flex';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const onClickEvent = () => {
  };

  return (
    <div className={`${flexRowCenter} gap-2`}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className="h-9" variant="outline" onClick={onClickEvent}>
        <span className={`${flexRowCenter} text-xs gap-2`}><Search/>찾기</span>
      </Button>
    </div>
  );
};

export default SearchBar;
