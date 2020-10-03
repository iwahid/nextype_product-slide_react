import React from 'react'

function Slide({ product }) {

  const { id, imageUrl, linkUrl, title, description, promotion, price, specifications } = product
  return (
    <div className="slide" >
      <div className="slide__left-section">
        <div className="img-container">
          <img src={imageUrl} alt={title} />
        </div>

      </div>
      <div className="slide__right-section">
        <ul className="promo-list">
          {
            promotion && promotion.map((item, index) => <li key={index}><span>{item}</span></li>)
          }

        </ul>
        <div className="product">
          <h2 className="product__title">{title}</h2>
          <h3 className="product__description">{description}</h3>

          <ul className="product__specifications">
            {
              specifications && specifications.map((item, index) => {
                return (
                  < li key={index} >
                    <span className="property">{item.key}</span>
                    <span className="separator"></span>
                    <span className="value">{item.value}</span>
                  </li>
                )
              })
            }
          </ul>

          <hr />
          <div className="product__purchase">
            <div className="product__price">
              <span className="current-price">{price.currentPrice}</span>
              <span className="old-price">{price.oldPrice && price.oldPrice}</span>
            </div>
            {/* здесь вместо обычной ссылки должен будет находится элемент Link */}
            <a className="more-details" href={linkUrl} alt={`Посмотреть страницу товара ${title}`}>Подробнее</a>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Slide
