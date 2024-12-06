// 예제입니다. 차후에 수정 하시면 될 것 같아요.

import { create } from 'zustand';

// 회원 정보 타입 정의
interface User {
  id: string;
  nickname: string;
  email: string;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: true }),
  clearUser: () => set({ user: null, isLoggedIn: false }),
}));

export default useUserStore;
