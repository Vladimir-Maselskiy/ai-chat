import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ITheme {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ITheme>()(
  persist(set => ({ theme: 'light', setTheme: theme => set({ theme }) }), {
    name: 'theme',
  })
);
