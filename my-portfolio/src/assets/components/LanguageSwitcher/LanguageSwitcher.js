import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/languageSlice';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const dispatch = useDispatch();
  const { currentLanguage, availableLanguages } = useSelector((state) => state.language);

  const handleLanguageChange = (languageCode) => {
    dispatch(setLanguage(languageCode));
    // The i18n language will be updated automatically through the useEffect in App.js
  };

  return (
    <div className="language-switcher">
      <div className="language-dropdown">
        <button className="language-button" aria-label="Select Language">
          <FaGlobe />
          <span className="current-flag">
            {availableLanguages.find(lang => lang.code === currentLanguage)?.flag}
          </span>
        </button>
        <div className="language-options">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="name">{language.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;