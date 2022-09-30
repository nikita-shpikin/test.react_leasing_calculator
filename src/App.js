import React from 'react';
import Count from './components/Count';
import './styles/app.sass';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Рассчитайте стоимость автомобиля в лизинг</h1>
      <Count />
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
