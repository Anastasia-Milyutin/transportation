import React from "react";
import "./footer.css";
import logo from "./img/Frame.svg";
import logoTwo from "./img/Frame (1).svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="block__logo">
          <img src={logo} alt="" className="logo" />
          <img src={logoTwo} alt="" className="logo" />
        </div>

        <div className="adress-mail">
          <p className="adress">123456, Санкт-Петербург, Невский пр-кт 127</p>
          <a href="mailto:sales@log.ru" className="mail">
            sales@log.ru
          </a>
        </div>

        <div className="blocks-nomber">
          <a href="tel:+7 (812) 344-56-65" className="nomber">
            +7 (812) 344-56-65
          </a>
          <a href="tel:+7 (812) 344-56-65" className="nomber">
            +7 (812) 344-56-65
          </a>
        </div>

        <p className="raz">Разработано - D-E-N.ru</p>
      </div>
    </div>
  );
};

export default Footer;
