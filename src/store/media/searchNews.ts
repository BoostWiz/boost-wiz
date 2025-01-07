import { create } from 'zustand';

interface SearchNews {
  searchName: string;
  setSearchName: (searchName: string) => void;
}

const SearchNewsStore = create<SearchNews>((set) => ({
  searchName: '',
  setSearchName: (searchName: string) => set({ searchName }),
}));

export default SearchNewsStore;
