import React, { useState, useEffect } from 'react'
import { useAIOpponent } from '../../hooks/useAIOpponent';
import { useBattleSequence } from '../../hooks/useBattleSequence';
import { opponentStats, playerStats, wait } from '../../shared';
import { BattleAnnouncer } from '../BattleAnnouncer/BattleAnnouncer';
import { BattleMenu } from '../BattleMenu';
import { PlayerSummary } from '../PlayerSummary';
import styles from './styles.module.css';
import { AnimHero } from '../../shared';

export const Battle = ({ pClass, pName, foe, onGameEnd }) => {

  const [sequence, setSequence] = useState({});

  if (foe == 'fatGoblin') {
    foe = opponentStats[0];
  }
  if (foe == 'squidusa') {
    foe = opponentStats[1];
  }
  if (foe == 'smallDragon') {
    foe = opponentStats[4];
  }
  if (foe == 'demon') {
    foe = opponentStats[3];
  }
  if (foe == 'bigDragon') {
    foe = opponentStats[2];
  }


  if (pClass == 'warrior') {
    pClass = playerStats[0];
    if (pName) {
      pClass.name = pName;
    }
  }
  if (pClass == 'ranger') {
    pClass = playerStats[1];
    if (pName) {
      pClass.name = pName;
    }
  }
  if (pClass == 'mage') {
    pClass = playerStats[2];
    if (pName) {
      pClass.name = pName;
    }
  }


  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    announcerMessage,
    playerAnimation,
    opponentAnimation,
  } = useBattleSequence(sequence, foe, pClass);

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });

    }
  }, [turn, aiChoice, inSequence])

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1000);
        onGameEnd(playerHealth === 0 ? foe : pClass);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd])

  return (
    <>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary
            health={opponentHealth}
            name={foe.name}
            level={foe.level}
            maxHealth={foe.maxHealth}
          />
        </div>
      </div>

      <div className={styles.characters}>
        <div className={styles.gameHeader}>
          {pClass.name}   vs   {foe.name}
        </div>

        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              src={pClass.img}
              alt={pClass.name}
              className={styles[playerAnimation]}
            />
            {/* <AnimHero /> */}
          </div>

          <div className={styles.opponentSprite}>
            <img
              src={foe.img}
              alt={foe.name}
              className={styles[opponentAnimation]}
            />
          </div>

        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.summary}>
          <PlayerSummary
            main
            health={playerHealth}
            name={pClass.name}
            level={pClass.level}
            maxHealth={pClass.maxHealth}
          />
        </div>
        <div className={styles.hud}>

          <div className={styles.hudChild}>
            <BattleAnnouncer
              message={announcerMessage || `What will ${pClass.name} do?`}
            />
          </div>

          <div className={styles.hudChild}>
            <BattleMenu
              onAttack={() => setSequence({ turn, mode: 'attack' })}
              onMagic={() => setSequence({ turn, mode: 'magic' })}
              onHeal={() => setSequence({ turn, mode: 'heal' })}
              inSequence={inSequence}
            />
          </div>
        </div>
      </div>
    </>

  )
}

