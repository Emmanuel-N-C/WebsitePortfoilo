import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLanguage: 'en',
  availableLanguages: [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ]
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
      localStorage.setItem('selectedLanguage', action.payload);
    },
    initializeLanguage: (state) => {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage && state.availableLanguages.some(lang => lang.code === savedLanguage)) {
        state.currentLanguage = savedLanguage;
      }
    }
  }
});

export const { setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;