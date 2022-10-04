import React, { useState } from 'react';
import Loader from './UI/Loader';

export default function Form({
  monthPay,
  sumPay,
  leaseTerm,
  initialFee,
  priceCar,
  initailPaymentPercent
}) {
  const [loading, setLoading] = useState(false);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      car_coast: priceCar,
      initail_payment: initialFee,
      initail_payment_percent: initailPaymentPercent,
      lease_term: leaseTerm,
      total_sum: sumPay,
      monthly_payment_from: monthPay
    })
  };

  const submitHandler = async e => {
    setLoading(true);
    await fetch('https://eoj3r7f3r4ef6v4.m.pipedream.net', requestOptions)
      .then(data => console.log(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
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

      <button
        type='submit'
        className='result__button'
        onClick={event => submitHandler(event)}
        disabled={loading}
      >
        {loading ? <Loader /> : 'Оставить заявку'}
      </button>
    </form>
  );
}
