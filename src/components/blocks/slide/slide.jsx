import React from 'react'
import contentImage from './image-1.png'

function Slide() {
  return (
    <div class="slide" >
      <div class="slide__left-section">
        <div class="img-container">
          <img src="https://www.e-katalog.ru/jpg_zoom1/1233564.jpg" alt="Сейф Aiko TT-28" />
        </div>

      </div>
      <div class="slide__right-section">
        <ul class="promo-list">
          <li><span>Акция</span></li>
        </ul>
        <div className="product">
          <h2 class="product__title">Сейф Aiko TT-28</h2>
          <h3 class="product__description">Сейф Aiko TT-28 предназначен для хранения короткоствольного и
                травматического оружия, пистолетов, холодного оружия (охотничьи ножи) в домашних условиях.</h3>

          <ul class="product__specifications">
            <li>
              <span class="property">Масса</span>
              <span class="separator"></span>
              <span class="value">8.5 кг</span>
            </li>
            <li>
              <span class="property">Габариты</span>
              <span class="separator"></span>
              <span class="value">280x340x295 мм</span>
            </li>
            <li>
              <span class="property">Производство</span>
              <span class="separator"></span>
              <span class="value">Россия</span>
            </li>
            <li>
              <span class="property">Объём</span>
              <span class="separator"></span>
              <span class="value">22/11 л</span>
            </li>
          </ul>

          <hr />
          <div class="product__purchase">
            <div class="product__price">
              <span class="current-price">29 900 руб.</span>
              <span class="old-price">34 590 руб.</span>

            </div>
            <button class="more-details">
              Подробнее
                </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slide
