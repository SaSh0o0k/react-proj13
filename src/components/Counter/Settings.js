import React from 'react';
import styles from './Settings.module.scss';

const Settings = (props) => {
  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value);
    props.changeStep(newStep);
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    props.changeMode(newMode);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Налаштування</h2>
      <label className={styles.labelStep}>
        Крок:
        <input
          type="number"
          value={props.step}
          onChange={handleStepChange}
          className={styles.input}
        />
      </label>
      <label className={styles.labelMode}>
        Режим:
        <select value={props.mode} onChange={handleModeChange} className={styles.select}>
          <option value="plus">Додавання</option>
          <option value="minus">Віднімання</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
