import React from 'react';

export default function Result({ monthPay, sumPay }) {
  return (
    <>
      <div className='result-block'>
        <div>
          <span className='result-block__subTitle'>Сумма договора лизинга</span>
          <span className='result-block__title'>{sumPay}</span>
        </div>

        <div>
          <span className='result-block__subTitle'>Ежемесячный платеж от</span>
          <span className='result-block__title'>{monthPay}</span>
        </div>
      </div>

      <button className='result__button'>Оставить заявку</button>
    </>
  );
}
