import React from 'react'
import './car.css'
import img from './img/Rectangle 4.svg'
const Car = () => {
  return (
    <div>
        <section className="car">
    <div className="car__text">
        <h2 className="car__h">грузоперевозки по европе</h2>
        <p className="car__p">Страны Евросоюза, а также Украина, Белоруссия со всеми документами.</p>
        <button className="btn">ПОДРОБНЕЕ</button>
    </div>

    <img src={img} alt="" className="car-img" />
</section>
</div>
  )
}

export default Car