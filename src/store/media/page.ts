import { create } from 'zustand';

interface Page {
  page: number;
  setPage: (page: number) => void;
}

const PageStore = create<Page>((set) => ({
  page: 1,
  setPage: (page: number) => set({ page }),
}));

export default PageStore;
