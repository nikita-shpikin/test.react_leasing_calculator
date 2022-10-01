import React, { useState } from 'react';
import Count from './components/Count';
import './styles/app.sass';
import { valueContext } from './context/context.js';

function App() {
  const [priceValue, setPriceValue] = useState(1_000_000);
  const [feeValue, setFeeValue] = useState(100_000);
  const [termValue, setTermValue] = useState(1);
  const [error, setError] = useState(false);
  const [state, setState] = useState([
    {
      id: 1,
      text: 'Стоимость автомобиля',
      errorValue: 'Введите стоимость автомобиля от 1 до 6 миллионов',
      max: 6_000_000,
      min: 1_000_000
    },
    {
      id: 2,
      text: 'Первоначальный взнос',
      errorValue: 'Введите процент взнос от 10 до 60 процентов',
      max: 600_000,
      min: 100_000
    },
    {
      id: 3,
      text: 'Срок лизинга',
      errorValue: 'Введите месяц лизинга от 1 до 60 месяцев',
      max: 60,
      min: 1
    }
  ]);

  const getFee = e => {
    let sum = (priceValue / 1_000_000) * e;
    setFeeValue(sum);
  };

  const getPrice = (e, min, max, setValue) => {
    if (e >= min && e <= max) {
      setError(false);
      setPriceValue(e);
    } else if (isNaN(e)) {
      setError(true);
    } else {
      setPriceValue(e);
      setError(true);
    }
  };

  return (
    <valueContext.Provider
      value={{
        priceValue,
        setPriceValue,
        feeValue,
        setFeeValue,
        termValue,
        setTermValue,
        error,
        getPrice,
        getFee
      }}
    >
      <div className='container'>
        <h1 className='title'>Рассчитайте стоимость автомобиля в лизинг</h1>
        <div className='counts'>
          {state.map(count => (
            <Count
              id={count.id}
              key={count.id}
              text={count.text}
              errorValue={count.errorValue}
              max={count.max}
              min={count.min}
            />
          ))}
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
    </valueContext.Provider>
  );
}

export default App;
