import React,{useState,useEffect} from "react";
import { useTranslation } from "react-i18next";  
import German from "../assets/images/germaniya.svg";
import usa from "../assets/images/usa.svg";
import brazil from "../assets/images/brazil.svg";
import iceland from "../assets/images/iceland.svg";
import afgonistan from "../assets/images/afgonistan.svg";
import alandislands from "../assets/images/alandislands.svg";
import albania from "../assets/images/albaniya.svg";
import algeria from "../assets/images/algeria.svg";  


function Card1() {
 const [languages,] = useState("en");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(languages);
  }, [languages, i18n]);
  return (
    <div className="cards">
      <div className="cardchild">
        <img src={German} alt="" />
        <h3>{t("Germany")}</h3>
        <div>
          <h5>
            {t(" Population: ")} <span>{t("81,770,900")}</span>
          </h5>
          <h5>
           {t(" Region:")} <span>{t("Europe ")}</span>
          </h5>
          <h5>
            {t(" Capital: ")} <span>{t(" Berlin")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={usa} alt="" />
        <h3>{t("United States of America")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("323,947,000")}</span>
          </h5>
          <h5>
           {t(" Region:")} <span>{t("Americas")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Washington.D.C.")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={brazil} alt="" />
        <h3>{t("Brazil")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("206,135,893")}</span>
          </h5>
          <h5>
           {t(" Region:")} <span>{t("Americas")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Brasilia")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={iceland} alt="" />
        <h3>{t("Iceland")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("334,300")}</span>
          </h5>
          <h5>
           {t(" Region:")} <span>{t("Europe")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Reykjavik")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={afgonistan} alt="" />
        <h3>{t("Afghanistan")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("27,657,145")}</span>
          </h5>
          <h5>
           {t(" Region: ")} <span>{t("Asia")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Kabul")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={alandislands} alt="" />
        <h3>{t("Åland Islandsy")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("28,875")}</span>
          </h5>
          <h5>
           {t(" Region: ")} <span>{t("Europe")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Marienhamn")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={albania} alt="" />
        <h3>{t("Albania")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("2,886,026")}</span>
          </h5>
          <h5>
           {t(" Region: ")} <span>{t("Europe")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Tirana")}</span>
          </h5>
        </div>
      </div>
      <div className="cardchild">
        <img src={algeria} alt="" />
        <h3>{t("Algeria")}</h3>
        <div>
          <h5>
            {t("Population: ")} <span>{t("40,400,000")}</span>
          </h5>
          <h5>
           {t(" Region:")} <span>{t("Africa")}</span>
          </h5>
          <h5>
            {t("Capital: ")} <span>{t("Algiers")}</span>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Card1;
