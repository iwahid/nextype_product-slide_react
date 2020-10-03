import React from 'react';
import Section from './components/blocks/section/section'

function App() {


  /* хук, для загрузки данных. Имитирующий componentDidMount благодаря отсутствию зависимостей*/
  const [productList, setProductList] = React.useState([])

  /* "Получаю" данные здесь, а не внутри компонента Section из-за того, что на мой взгляд, более корректно получить все данные сразу, и тратить время только на их рендеринг во время переключения категорий "Лучшие товары" и "Все товары", а не на загрузку списка, каждый раз при смене вкладки */
  React.useEffect(() => {
    /* FIXME: не забывать менять адрес при деплое
      если приложение не отображает данные, значит вариант с url нужно сменить локальный/деплой */
    fetch("/nextype_product-slide_react/db.json")
      .then((resp) => resp.json())
      .then((jsonResult) => {
        setProductList(jsonResult.products)
        console.log("Результат запроса: ", productList)
      }
      )
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Section
          productList={productList} />
      </div>
    </div>
  );
}

export default App;
