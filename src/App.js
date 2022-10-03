import React, { useEffect, useState } from 'react';
import Count from './components/Count';
import Form from './components/Form';
import './styles/app.sass';
import { valueContext } from './context/context';

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      text: 'Стоимость автомобиля',
      errorValue: 'Введите стоимость автомобиля от 1 до 6 миллионов',
      max: 6_000_000,
      min: 1_000_000,
      element: '₽',
      value: 1_000_000
    },
    {
      id: 2,
      text: 'Первоначальный взнос',
      errorValue: 'Введите процент взнос от 10 до 60 процентов',
      max: 600_000,
      min: 100_000,
      element: '%',
      value: 100_000
    },
    {
      id: 3,
      text: 'Срок лизинга',
      errorValue: 'Введите месяц лизинга от 1 до 60 месяцев',
      max: 60,
      min: 1,
      element: 'мес.',
      value: 1
    }
  ]);

  const [priceCar, setPriceCar] = useState(1_000_000);
  const [initialFee, setInitialFee] = useState(100_000);
  const [leaseTerm, setLeaseTerm] = useState(1);

  useEffect(() => {
    state.forEach(obj => {
      if (obj.value > obj.max || obj.value < obj.min) {
        return false;
      } else {
        if (obj.id === 1) {
          setPriceCar(obj.value);
        } else if (obj.id === 2) {
          setInitialFee(obj.value);
        } else if (obj.id === 3) {
          setLeaseTerm(obj.value);
        }
      }
    });
  }, [state]);

  const monthPay = Math.floor(
    (priceCar - initialFee) *
      ((0.035 * Math.pow(1 + 0.035, leaseTerm)) /
        (Math.pow(1 + 0.035, leaseTerm) - 1))
  );

  const sumPay = initialFee + leaseTerm * monthPay;

  return (
    <valueContext.Provider value={{ setState, state }}>
      <div className='container'>
        <h1 className='title'>Рассчитайте стоимость автомобиля в лизинг</h1>
        <div className='counts'>
          {state.map(count => (
            <Count
              id={count.id}
              key={count.id}
              min={count.min}
              max={count.max}
              text={count.text}
              errorValue={count.errorValue}
              element={count.element}
              value={count.value}
            />
          ))}
        </div>
        <Form monthPay={monthPay} sumPay={sumPay} />
      </div>
    </valueContext.Provider>
  );
}

export default App;
