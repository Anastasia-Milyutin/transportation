import React from "react";
import "./cards.css";
import logo from "./img/airplane-flight.svg";
import logoWhite from "./img/airplane-flight-white.svg";
const cards = [
  {
    text: "Авиаперевозки",
    id: 0,
  },
  {
    text: "Авиаперевозки",
    id: 1,
  },
  {
    text: "Авиаперевозки",
    id: 2,
  },
  {
    text: "Авиаперевозки",
    id: 3,
  },
  {
    text: "Авиаперевозки",
    id: 4,
  },
  {
    text: "Авиаперевозки",
    id: 5,
  },
  {
    text: "Авиаперевозки",
    id: 6,
  },
  {
    text: "Авиаперевозки",
    id: 7,
  },
];

const Cards = () => {
  return (
    <div className="section__cards">
      <h3 className="cards__h">услуги</h3>

      <div className="cards__flex-block">
        {cards.map((card) => {
          return (
            <div className="block-card">
              <img src={logoWhite} alt="нет изображения" className="logo" />
              <p className="texts">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
