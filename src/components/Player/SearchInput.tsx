import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import { flexRowCenter } from '@/styles/flex';
import { useState } from 'react';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // TODO : EnterKey, 서버 api 연동 준비
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
