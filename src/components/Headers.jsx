import React, {useContext,useState,useEffect} from 'react'
import { ThemeContext } from '../App';
import { useTranslation } from 'react-i18next';
import img from '../assets/images/mode.svg'
import '../App.css'


function Headers() {
   const [languages] = useState("en");
   const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    i18n.changeLanguage(languages);
  }, [languages, i18n]);
  return (
    <div className="headers">
      <a href="#" className="logo">
        <h1>{t("Where in the world?")}</h1>
      </a>
      <p
        className="themebtn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <img src={img} alt="" />
        {theme === "light" ? "Dark mode" : "Light mode"}
      </p>
    </div>
  );
}

export default Headers