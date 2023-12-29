import React from "react";
import "./header.css";
import logo from "./img/Frame.svg";
import logoTwo from "./img/Frame (1).svg";
import dot from "./img/placeholder.svg";

const Header = () => {
  return (
    <div>
      <section className="header">
        <div className="block__brown">
          <a href="tel:8 (800) 123-45-67" className="tel">
            8 (800) 123-45-67
          </a>
          <a href="mailto:sales@log.ru" className="mail">
            sales@log.ru
          </a>
        </div>

        <div className="block__header">
          <div className="block__logo">
            <img src={logo} alt="" className="logo" />
            <img src={logoTwo} alt="" className="logo" />
          </div>
          <span className="line"></span>

          <div className="block__ofice">
            <img src={dot} alt="" styleName="dot" />
            <p className="ofices">Наши офисы</p>
          </div>

          <div className="menu">
            <a href="" className="menu__link">
              услуги
            </a>
            <a href="" className="menu__link">
              О компании
            </a>
            <a href="" className="menu__link">
              вакансии
            </a>
            <a href="" className="menu__link">
              контакты
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
