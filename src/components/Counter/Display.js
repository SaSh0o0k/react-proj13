import React, { useState, useEffect } from 'react';
import styles from './Display.module.scss';

const Display = (props) => {
  const [autoClickDuration, setAutoClickDuration] = useState(10);
  const [mode, setMode] = useState(props.mode);
  const [autoClickActive, setAutoClickActive] = useState(false);

  const startAutoClick = () => {
    setAutoClickActive(true);
  };

  const stopAutoClick = () => {
    setAutoClickActive(false);
  };

  const handleAutoClickDurationChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setAutoClickDuration(newDuration);
  };

  useEffect(() => {
    let timer;
    if (autoClickActive) {
      timer = setTimeout(() => {
        setAutoClickActive(false);
      }, autoClickDuration * 1000);
    }
    return () => clearTimeout(timer);
  }, [autoClickActive, autoClickDuration]);

  useEffect(() => {
    const autoClickInterval = setInterval(() => {
      if (autoClickActive) {
        props.changeCount();
      }
    }, 1000);
    return () => clearInterval(autoClickInterval);
  }, [autoClickActive, props]);

  useEffect(() => {
    startAutoClick();
  }, []);

  useEffect(() => {
    if (props.mode !== mode) {
      setMode(props.mode);

      if (autoClickActive) {
        setAutoClickActive(false);
      }
    }
  }, [props.mode, mode, autoClickActive]);

  return (
    <div className={styles.displayContainer}>
      <h2>Відображення</h2>
      <p>Значення лічильника: {props.count}</p>

      <div className={styles.buttonsContainer}>
        <button
          onClick={props.changeCount}
          disabled={autoClickActive && !(props.count === 0 && props.mode === 'minus')}
          className={styles.buttonClick}>
          {props.mode === 'plus' ? 'Додати' : 'Відняти'}
        </button>
        <button
          onClick={startAutoClick}
          disabled={autoClickActive && !(props.count === 0 && props.mode === 'minus')}
          className={styles.buttonStart}>
          Старт
        </button>
        <button
          onClick={stopAutoClick}
          className={styles.buttonStop}>
          Стоп
        </button>
      </div>

      <label>
        Тривалість автокліку (секунди):
        <input
          type="number"
          value={autoClickDuration}
          onChange={handleAutoClickDurationChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default Display;
