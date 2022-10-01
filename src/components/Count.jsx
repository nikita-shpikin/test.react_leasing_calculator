import React, { useContext } from 'react';
import { valueContext } from '../context/context';

export default function Count({ text, min, max, errorValue, id }) {
  const {
    priceValue,
    setPriceValue,
    feeValue,
    setFeeValue,
    termValue,
    setTermValue,
    error,
    getPrice,
    getFee
  } = useContext(valueContext);

  let value = null;
  if (id === 1) {
    value = priceValue;
  }
  if (id === 2) {
    value = feeValue;
  }
  if (id === 3) {
    value = termValue;
  }

  const styles = [
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
      ((value - min) / (max - min)) * 100
    )}%, #E1E1E1 ${
      Math.floor((value - min) / (max - min)) * 100
    }%, #E1E1E1 100%)`,

    `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
      ((value - min) / (max - min)) * 100
    )}%, #E1E1E1 ${Math.floor(
      ((value - min) / (max - min)) * 100
    )}%, #E1E1E1 100%)`,

    `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
      ((value - min) / (max - min)) * 100
    )}%, #E1E1E1 ${
      Math.floor((value - min) / (max - min)) * 100
    }%, #E1E1E1 100%)`
  ];

  const style =
    id === 1 ? styles[0] : id === 2 ? styles[1] : id === 3 ? styles[2] : '';

  const getTerm = e => {
    console.log(e);
    setTermValue(e);
  };

  const getValue = e => {
    if (id === 1) {
      getPrice(e, min, max, setPriceValue);
    } else if (id === 2) {
      getFee(e);
    } else if (id === 3) {
      getTerm(e);
    }
  };
  return (
    <div>
      <span className='counts__subTitle'>{text}</span>

      <input
        className='counts__input'
        type='text'
        value={value}
        onChange={e => getValue(+e.target.value)}
      />
      {error && <span className='counts__error'>{errorValue}</span>}

      <input
        style={{ background: style }}
        defaultValue={value}
        className='counts__range'
        type='range'
        min={min}
        max={max}
        onChange={e => getValue(+e.target.value)}
        onInput={e => getValue(+e.target.value)}
      />
    </div>
  );
}
