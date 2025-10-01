import { create } from "zustand";

const initialState = {
  theme: "light",
};

const useThemeStore = create((set) => ({
  ...initialState,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useThemeStore;
