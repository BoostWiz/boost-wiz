import { useState } from 'react';
import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import { flexRowCenter } from '@/styles/flex';
import { Search } from 'lucide-react';
import { useSearchNewsStore } from '@/store';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { setSearchName } = useSearchNewsStore();

  const onClickEvent = () => {
    setSearchName(search);
  };

  const handleKeyDown = (e: any) => {
    if(e.key === 'Enter') {
      setSearchName(search);
    }
  }

  return (
    <div className={`${flexRowCenter} gap-2`}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className="h-9" variant="outline" onClick={onClickEvent}>
        <span className={`${flexRowCenter} text-xs gap-2`}><Search/>찾기</span>
      </Button>
    </div>
  );
};

export default SearchBar;
