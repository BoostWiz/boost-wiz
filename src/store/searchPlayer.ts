import { create } from 'zustand';

interface SearchPlayer {
  searchName: string;
  setSearchName: (searchName: string) => void;
}

const searchPlayerStore = create<SearchPlayer>((set) => ({
  searchName: '',
  setSearchName: (searchName: string) => set({ searchName }),
}));

export default searchPlayerStore;
