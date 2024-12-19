import { create } from 'zustand';

interface CalendarState {
  year: string;
  month: string;
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
}

const today = new Date();
const currentYear = today.getFullYear().toString();
const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');

const useCalendarStore = create<CalendarState>((set) => ({
  year: currentYear,
  month: currentMonth,
  setYear: (year: string) => set({ year }),
  setMonth: (month: string) => set({ month }),
}));

export default useCalendarStore;
