import React, { useState } from 'react';
import styles from './Settings.module.scss';

const Settings = ({ changeStep, changeMode }) => {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('plus');

  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value);
    setStep(newStep);
    changeStep(newStep);
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setMode(newMode);
    changeMode(newMode);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Налаштування</h2>
      <label className={styles.labelStep}>
        Крок:
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          className={styles.input}
        />
      </label>
      <label className={styles.labelMode}>
        Режим:
        <select value={mode} onChange={handleModeChange} className={styles.select}>
          <option value="plus">Додавання</option>
          <option value="minus">Віднімання</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
