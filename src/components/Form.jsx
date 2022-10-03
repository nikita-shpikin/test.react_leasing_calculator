import React from 'react';

export default function Form({ monthPay, sumPay }) {
  const data = { monthPay: monthPay, sumPay: sumPay };

  const submitHandler = e => {
    fetch('https://eoj3r7f3r4ef6v4.m.pipedream.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    e.event.preventDefault();
  };

  return (
    <form className='result'>
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

      <input
        type='submit'
        className='result__button'
        value={'Оставить заявку'}
        onSubmit={submitHandler}
      />
    </form>
  );
}
