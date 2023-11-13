import React, { useState, useEffect } from 'react';
import styles from './Display.module.scss';

const Display = ({ count, changeCount, mode }) => {
  const [autoClickDuration, setAutoClickDuration] = useState(10);
  const [autoClickActive, setAutoClickActive] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);
  const shouldDisableButton = autoClickActive && !(count === 0 && mode === 'minus');

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
      }, autoClickDuration * 1010);
    }
    return () => clearTimeout(timer);
  }, [autoClickActive, autoClickDuration]);

  useEffect(() => {
    const autoClickInterval = setInterval(() => {
      if (autoClickActive) {
        changeCount();
      }
    }, 1000);
    return () => clearInterval(autoClickInterval);
  }, [autoClickActive, changeCount]);

  useEffect(() => {
    startAutoClick();
  }, []);

  useEffect(() => {
    if (currentMode !== mode) {
      setCurrentMode(mode);

      if (autoClickActive) {
        setAutoClickActive(false);
      }
    }
  }, [mode, currentMode, autoClickActive]);

  return (
    <div className={styles.displayContainer}>
      <h2>Відображення</h2>
      <p>Значення лічильника: {count}</p>

      <div className={styles.buttonsContainer}>
        <button
          onClick={changeCount}
          disabled={shouldDisableButton}
          className={styles.buttonClick}
        >
          {mode === 'plus' ? 'Додати' : 'Відняти'}
        </button>
        <button
          onClick={startAutoClick}
          disabled={shouldDisableButton}
          className={styles.buttonStart}
        >
          Старт
        </button>
        <button
          onClick={stopAutoClick}
          disabled={!shouldDisableButton}
          className={styles.buttonStop}
        >
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
