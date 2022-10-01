import React from 'react';

export default function Count({
  text,
  value,
  setValue,
  min,
  max,
  errorValue,
  error,
  func
}) {
  return (
    <div>
      <span className='counts__subTitle'>{text}</span>

      <input
        className='counts__input'
        type='text'
        value={value}
        onChange={e => func(+e.target.value, min, max, setValue)}
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
        defaultValue={value}
        className='counts__range'
        type='range'
        min={min}
        max={max}
        onChange={e => setValue(+e.target.value)}
        onInput={e => func(+e.target.value, min, max, setValue)}
      />
    </div>
  );
}
