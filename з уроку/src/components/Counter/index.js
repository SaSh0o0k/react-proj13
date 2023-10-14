import React, { useState } from 'react';

const Counter = () => {
  console.log('render');
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handlerClick = () => setCount(count + step);
  // const handlerClick = () => setCount((c) => c + 1);
  const handlerInput = ({ target: { value } }) => {
    setStep(Number(value));
  }
  return (
    <div>
      <h2>COUNT:{count}</h2>
      <h3>step:{step}</h3>
      <button onClick={handlerClick}>increment</button>
      <input type="number" onChange={handlerInput} value={step} />
    </div>
  );
}

export default Counter;
