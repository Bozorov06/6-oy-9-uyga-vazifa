import React, { createContext, useState, useEffect } from "react";
import Headers from "./components/Headers";
import Inputs from "./components/Inputs";
import Card1 from  "./components/Card1"
import { useTranslation } from "react-i18next";
import './App.css'

export const ThemeContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#121212" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#2B3844";
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {/* <div className={theme}> */}
          <Headers />
          <Inputs />
          <Card1/>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
