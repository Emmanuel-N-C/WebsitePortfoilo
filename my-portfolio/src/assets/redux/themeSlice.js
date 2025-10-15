import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("darkMode") === "true";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: storedTheme || false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
