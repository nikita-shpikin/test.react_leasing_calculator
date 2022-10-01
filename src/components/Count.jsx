import React, { useState } from 'react';

export default function Count() {
  const [priceValue, setPriceValue] = useState(0);
  const [feeValue, setFeeValue] = useState(0);
  const [termValue, setTermValue] = useState(0);

  return (
    <div className='count'>
      <div>
        <span className='count__subTitle'>Стоимость автомобиля</span>
        <input className='count__input' type='text' />
        <input
          style={{
            background: `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
              ((priceValue - 1000000) / (6000000 - 1000000)) * 100
            )}%, #E1E1E1 ${
              Math.floor((priceValue - 1000000) / (6000000 - 1000000)) * 100
            }%, #E1E1E1 100%)`
          }}
          defaultValue={priceValue}
          className='count__range'
          type='range'
          min={1_000_000}
          max={6_000_000}
          onChange={e => setPriceValue(+e.target.value)}
        />
      </div>
      <div>
        <span className='count__subTitle'>Первоначальный взнос</span>
        <input className='count__input' type='text' />
        <input
          style={{
            background: `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
              ((feeValue - 10) / (60 - 10)) * 100
            )}%, #E1E1E1 ${
              Math.floor((feeValue - 10) / (60 - 10)) * 100
            }%, #E1E1E1 100%)`
          }}
          defaultValue={feeValue}
          className='count__range'
          type='range'
          min={10}
          max={60}
          onChange={e => setFeeValue(+e.target.value)}
        />
      </div>
      <div>
        <span className='count__subTitle'>Срок лизинга</span>
        <input className='count__input' type='text' />
        <input
          style={{
            background: `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
              ((termValue - 1) / (60 - 1)) * 100
            )}%, #E1E1E1 ${
              Math.floor((termValue - 1) / (60 - 1)) * 100
            }%, #E1E1E1 100%)`
          }}
          defaultValue={termValue}
          className='count__range'
          type='range'
          min={1}
          max={60}
          onChange={e => setTermValue(+e.target.value)}
        />
      </div>
    </div>
  );
}
