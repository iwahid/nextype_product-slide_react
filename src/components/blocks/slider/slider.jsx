import React, { useState } from 'react'
import Slide from './../slide/slide'

function Slider({ productList }) {

  /** хук и функции для перелистывания слайдов с помощью кнопок.
   * Обе функции высчитывают текущее значение номера слайда
   * toPrev - перелистывает на предыдущий. Если это самый первый слайд, то возвращает на последний
   * toNext - перелистывает на следущий. Если это последний слайд, то возвращает на первый
   */
  const [x, setX] = useState(0)
  const toPrev = () => (x === 0) ? setX((productList.length - 1) * -100) : setX(x + 100)
  const toNext = () => (x === ((productList.length - 1) * -100)) ? setX(0) : setX(x - 100)

  return (
    <div className="slider-wrapper">
      {/* обёртка, необходимая для позиционирования элементов управления вне рамок слайдера */}

      {/* div с классом slide-wrapper необходим для того, что бы задать внешний каркас для внутреннего "резинового" содержимого слайда */}
      <div className="slider">
        <div className="slider__list">
          {productList.map((product, index) => {
            return (
              <div key={index}
                className="slide-wrapper"
                style={{ transform: `translateX(${x}%)` }} >
                <Slide product={product}></Slide>
              </div>
            )
          })}
        </div>

        {/* кнопки переключения слайдов */}
        <button onClick={toPrev} className="toPrev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.52203 11.1669L11.992 6.69689L10.8137 5.51855L4.33203 12.0002L10.8137 18.4819L11.992 17.3036L7.52203 12.8336H19.6654V11.1669H7.52203Z" fill="#353545" />
          </svg>
        </button>

        <button onClick={toNext} className="toNext">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.52203 11.1669L11.992 6.69689L10.8137 5.51855L4.33203 12.0002L10.8137 18.4819L11.992 17.3036L7.52203 12.8336H19.6654V11.1669H7.52203Z" fill="#353545" />
          </svg>
        </button>

        {/* буллеты для переключения слайдов. Каждый из них перелистывает на определённый слайд через хуки */}
        <div class="slider__pagination">
          {
            productList.map((item, index) => <span
              key={index}
              onClick={() => { setX(index * -100) }} className={`bullet ${((x === index * -100) ? "bullet--active" : "")}`}></span>)
          }
        </div>

      </div>
    </div>
  )
}

export default Slider
