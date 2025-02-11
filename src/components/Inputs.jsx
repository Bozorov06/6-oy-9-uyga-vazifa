import React, { useEffect, useState, useContext } from "react";
import search from '../assets/images/search.svg'
import { ThemeContext } from "../App";
import { useTranslation } from 'react-i18next';
import "../App.css";

function Inputs() {
  const [languages, setLanguages] = useState('en')
  const {t, i18n} = useTranslation()
  const { theme } = useContext(ThemeContext);

  useEffect(()=>{
    i18n.changeLanguage(languages)
  }, [languages,i18n])
  return (
    <div className={`search ${theme}`}>
      <img src={search} alt="" />
      <input
        type="text"
        id="searchInput"
        placeholder={t("Search for a country…")}
      />
      <select
        className="selectRegion"
        value={languages}
        onChange={(e) => {
          setLanguages(e.target.value);
        }}
      >
        <option>en</option>
        <option>ru</option>
        <option>uz</option>
      </select>
    </div>
  );
}

export default Inputs;
