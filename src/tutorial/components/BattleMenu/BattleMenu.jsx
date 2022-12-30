import React from 'react';
import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onMagic, onHeal, inSequence }) => (
  <div className={styles.main}>
    <div onClick={inSequence ? null : onAttack} className={!inSequence ? styles.option : styles.off}>
      Attack
    </div>
    <div onClick={inSequence ? null : onMagic} className={!inSequence ? styles.option : styles.off}>
      Magic
    </div>
    <div onClick={inSequence ? null : onHeal} className={!inSequence ? styles.option : styles.off} style={!inSequence ? null : { backgroundColor: "grey", opacity: 0.3, cursor: 'not-allowed' }}>
      Heal
    </div>
  </div>
);