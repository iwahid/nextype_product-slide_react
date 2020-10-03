import React, { useState } from 'react'
import Slide from './../slide/slide'

function Slider() {

  let sliderArr = [1, 2, 3, 4, 5]

  /** хук и функции для перелистывания слайдов с помощью кнопок.
   * Обе функции высчитывают текущее значение номера слайда
   * toPrev - перелистывает на предыдущий. Если это самый первый слайд, то возвращает на последний
   * toNext - перелистывает на следущий. Если это последний слайд, то возвращает на первый
   */
  const [x, setX] = useState(0)
  const toPrev = () => (x === 0) ? setX((sliderArr.length - 1) * -100) : setX(x + 100)

  const toNext = () => (x === ((sliderArr.length - 1) * -100)) ? setX(0) : setX(x - 100)

  return (

    <div className="slider-wrapper">
      {/* обёртка, необходимая для позиционирования элементов управления вне рамок слайдера */}

      {/* div с классом slide-wrapper необходим для того, что бы задать внешний каркас для внутреннего "резинового" содержимого слайда */}
      <div className="slider">
        <div className="slider__list">
          {sliderArr.map((item, index) => {
            return (
              <div className="slide-wrapper" style={{ transform: `translateX(${x}%)` }} >
                <Slide ></Slide>
              </div>
            )
          })}
        </div>

        <button onClick={toPrev} className="toPrev"></button>
        <button onClick={toNext} className="toNext"></button>


        {/* буллеты для переключения слайдов. Каждый из них перелистывает на определённый слайд через хуки */}
        <div class="slider__pagination">
          {
            sliderArr.map((item, index) => <span
              key={index}
              onClick={() => { setX(index * -100) }} className={`bullet ${((x === index * -100) ? "bullet--active" : "")}`}></span>)
          }
        </div>

      </div>
    </div>
  )
}

export default Slider