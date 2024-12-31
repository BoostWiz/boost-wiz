import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import { flexRowCenter } from '@/styles/flex';
import { useState } from 'react';
import { useSearchPlayerStore } from '@/store';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const { setSearchName } = useSearchPlayerStore();

  const handleSearch = () => {
    setSearchName(searchValue);
  };

  return (
    <div className={`${flexRowCenter} gap-2`}>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <span className="text-xs">찾기</span>
      </Button>
    </div>
  );
};

export default SearchInput;
