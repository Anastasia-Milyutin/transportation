import React from "react";
import "./company.css";
import carImg from './img/Rectangle 2.2.png';

const cars = [
  {
    nomber: 48,
    ofice: "офисов",
    text: "В Европе и СНГ",
    id: 0,
  },
  {
    nomber: 361,
    ofice: "грузовиков",
    text: "Volvo, Scania",
    id: 1,
  },
  {
    img: carImg,
    id: 2,
  },
  {
    img: carImg,
    id: 3,
  },
  {
    nomber: 1500,
    ofice: "сотрудников",
    text: "профессионалов",
    id: 4,
  },
];

const Company = () => {
  return (
    <div className="com">
      <div className="company">
        <div className="flex-text">
          <h3 className="company__h">О компании</h3>
          <p className="company__p">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>

        <div className="company__flex-block">
          {cars.map((car) => {
            return (
              <div className="">
                <div className="block-cars">
                  {car.img && (
                    <img
                      src={car.img}
                      alt="нет изображения"
                      className="car-img"
                    />
                  )}
                  <h className="nomber">{car.nomber}</h>
                  <p className="ofice">{car.ofice}</p>
                  <p className="text">{car.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Company;
