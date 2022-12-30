import React from 'react'
import styles from './styles.module.css';
import { Bar } from '../Bar/Bar';
import darkMarble from '../../../assets/bgMarbleDark.jpg';

const red = "#821200";
// const blue = "#1953CB";
const img = `url(${darkMarble})`;

export const PlayerSummary = ({ main = false, name, level, health, maxHealth }) => {
  return (
    <div
      style={{ backgroundImage: img }}
      className={styles.main}>

      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.level}>LVL: {level}</div>
      </div>

      <div className={styles.health}>
        <Bar label="HP" value={health} maxValue={maxHealth} />
      </div>

    </div>
  )
}

