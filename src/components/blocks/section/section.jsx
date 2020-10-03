import React from 'react'
import Slider from './../slider/slider'
import Slide from './../slide/slide'

function Section({productList}) {
  /* Насколько я понял, этот фрагмент представляет собой панель с табами. Одно из наиболее быстрых решений - вкладки представлены кнопками, а первая (активная) будет заменяться на h1 - нет необходимости в интерактивности этого элемента (он уже выбран), к тому же, возможно, это может повлиять в лучшую сторону в плане семантики (но не уверен в этом)  */
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

      <Slider
      productList={productList}/>

    </section>
  )
}

export default Section
