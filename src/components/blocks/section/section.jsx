import React from 'react'
import Slider from './../slider/slider'
import Slide from './../slide/slide'

function Section() {
  return (
    <section className="section">
      <header className="section__header">
        <div className="section__tabs">
          <h2 className="section__tab">Лучшие товары</h2>
          <button type="submit" className="section__tab">Все товары</button>
        </div>
        <p className="section__description">
          Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
        </p>
      </header>

      {/* отдельный компонент */}
      <div className="section__slider">

      </div>
      <Slider></Slider>
     {/*  <Slide></Slide> */}

    </section>
  )
}

export default Section
