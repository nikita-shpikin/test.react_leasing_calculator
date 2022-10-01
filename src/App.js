import React, { useState } from 'react';
import Count from './components/Count';
import './styles/app.sass';

function App() {
  const [priceValue, setPriceValue] = useState(1000000);
  const [feeValue, setFeeValue] = useState(0);
  const [termValue, setTermValue] = useState(0);
  const [error, setError] = useState(false);

  const getPrice = (e, min, max, setValue) => {
    if (e >= min && e <= max) {
      setError(false);
      setValue(e);
    } else if (isNaN(e)) {
      setError(true);
    } else {
      setValue(e);
      setError(true);
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className='counts'>
        <Count
          text='Стоимость автомобиля'
          errorValue='Введите стоимость автомобиля от 1 до 6 миллионов'
          max={6_000_000}
          min={1_000_000}
          value={priceValue}
          setValue={setPriceValue}
          error={error}
          setError={setError}
          func={getPrice}
        />
        <Count
          text='Первоначальный взнос'
          errorValue='ошибка'
          max={60}
          min={10}
          value={feeValue}
          setValue={setFeeValue}
          error={error}
          setError={setError}
          func={getPrice}
        />
        <Count
          text='Срок лизинга'
          errorValue='ошибка'
          max={60}
          min={1}
          value={termValue}
          setValue={setTermValue}
          error={error}
          setError={setError}
          func={getPrice}
        />
      </div>

      <div className='result'>
        <div>
          <span>Сумма договора лизинга</span>
          <span>4 467 313</span>
        </div>
        <div>
          <span>Ежемесячный платеж от</span>
          <span>114 455</span>
        </div>
        <button>Оставить заявку</button>
      </div>
    </div>
  );
}

export default App;
