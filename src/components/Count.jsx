import React, { useState } from 'react';

export default function Count() {
  const [priceValue, setPriceValue] = useState(1_000_000);

  const getPriceValue = e => {
    console.log('x');
    setPriceValue(+e.target.value);
  };

  return (
    <div className='count'>
      <div>
        <span className='count__subTitle'>Стоимость автомобиля</span>
        <input className='count__input' type='text' onChange={getPriceValue} />
        <progress
          className='count__range'
          min={1_000_000}
          max={6_000_000}
        ></progress>
        {/* <input
          className='count__range'
          type='range'
          min={1_000_000}
          max={6_000_000}
          onInput={getPriceValue}
          onClick={}
        /> */}
      </div>
      <div>
        <span className='count__subTitle'>Первоначальный взнос</span>
        <input className='count__input' type='text' />
        <input className='count__range' type='range' min={10} max={60} />
      </div>
      <div>
        <span className='count__subTitle'>Срок лизинга</span>
        <input className='count__input' type='text' />
        <input className='count__range' type='range' min={1} max={60} />
      </div>
    </div>
  );
}
