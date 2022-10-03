import React, { useState, useContext } from 'react';
import { valueContext } from '../context/context';

export default function Count({
  id,
  min,
  max,
  text,
  errorValue,
  element,
  value
}) {
  const { setState, state } = useContext(valueContext);
  const [error, setError] = useState(false);
  if (id === 2) {
    element = Math.floor(value / 10000) + '%';
  }

  const getValues = e => {
    if (!isNaN(e)) {
      const newState = state.map(obj => {
        if (obj.id === id) {
          return { ...obj, value: e };
        } else {
          return obj;
        }
      });
      setState(newState);
      if (e >= min && e <= max) {
        setError(false);
        const newState = state.map(obj => {
          if (obj.id === id) {
            return { ...obj, value: e };
          } else {
            return obj;
          }
        });
        setState(newState);
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <span className='counts__subTitle'>{text}</span>
      <input
        className='counts__input'
        type='text'
        value={value}
        onInput={e => getValues(+e.target.value)}
      />
      {error && <span className='counts__error'>{errorValue}</span>}

      <input
        style={{
          background: `linear-gradient(to right, #ff9800 0%, #ff9800 ${Math.floor(
            ((value - min) / (max - min)) * 100
          )}%, #E1E1E1 ${
            Math.floor((value - min) / (max - min)) * 100
          }%, #E1E1E1 100%)`
        }}
        className='counts__range'
        type='range'
        min={min}
        max={max}
        defaultValue={value}
        onChange={e => getValues(+e.target.value)}
      />
      <span
        className={`counts__element ${
          id === 2 ? ' counts__element_percent' : ''
        }`}
      >
        {element}
      </span>
    </div>
  );
}
