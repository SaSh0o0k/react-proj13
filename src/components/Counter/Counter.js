import React, { useState } from 'react';
import Settings from './Settings';
import Display from './Display';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('plus');

  const changeStep = (newStep) => {
    setStep(newStep);
  };

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  const changeCount = () => {
    let newCount;
    if (mode === 'plus') {
      newCount = count + step;
    } else {
      newCount = count - step;
    }

    if (newCount >= 0) {
      setCount(newCount);
    } else {
      setCount(0);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <h1>ЛІЧИЛЬНИК</h1>
      <Settings
        step={step}
        mode={mode}
        changeStep={changeStep}
        changeMode={changeMode} />
      <Display
        count={count}
        changeCount={changeCount}
        mode={mode} />
    </div>
  );
};

export default Counter;
