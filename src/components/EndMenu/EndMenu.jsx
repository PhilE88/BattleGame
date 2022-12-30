import React from 'react';
import styles from './styles.module.css';

export const EndMenu = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.fontLink}>{winner.name} has won!</h1>
      <button className={styles.startButton} onClick={onStartClick}>
        Play Again
      </button>
    </div>
  );
};