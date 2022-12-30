import styles from './styles.module.css';
import React, { useState } from 'react';
import { StartMenu } from '../StartMenu/StartMenu';
import { Battle } from '../Battle';
import { EndMenu } from '../EndMenu';

export const App = () => {
  const [mode, setMode] = useState('start');
  const [winner, setWinner] = useState();
  const [foe, setFoe] = useState('');
  const [pName, setpName] = useState('');
  const [pClass, setpClass] = useState('');

  const enemyChecker = () => {
    let enemyList = document.getElementsByName('enemyChoice');
    if (enemyList[0].checked) {
      return enemyList[0].value;
    }
    if (enemyList[1].checked) {
      return enemyList[1].value;
    }
    if (enemyList[2].checked) {
      return enemyList[2].value;
    }
    if (enemyList[3].checked) {
      return enemyList[3].value;
    }
    if (enemyList[4].checked) {
      return enemyList[4].value;
    }
    console.log(`You must make a choice`);
    return 0;
  }

  const playerNameChecker = () => {
    let nameField = document.getElementById('pName').value;
    return nameField;
  }

  const playerClassChecker = () => {
    let selectField = document.getElementById('pClass-select').value;
    return selectField;
  }

  return (
    <div className={styles.main}>
      {mode === 'start' &&
        <>
          <div
          //  style={{ display: 'flex', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '15%', flexDirection: 'column' }}
          >
            <h1 className={styles.fontLink}>Name Thyself...</h1>
            <div className={styles.nameField}>
              <input type='text' placeholder='Name' id='pName' name='pName' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <label htmlFor='pClass-select' style={{ fontWeight: '700', paddingRight: 8, fontSize: '21px' }}>Class: </label>
              <div className={styles.nameField}>
                <select name="pClass" id="pClass-select">
                  <option value="warrior">Warrior</option>
                  <option value="ranger">Ranger</option>
                  <option value="mage">Mage</option>
                </select>
              </div>
            </div>
            <h1 className={styles.fontLink}>Choose opponent...</h1>
            <div className={styles.labels}>
              <input type='radio' name='enemyChoice' value='fatGoblin' id='fatGoblin' className={styles.radio} />
              <label htmlFor='fatGoblin'>Fat Goblin</label>
            </div>
            <div className={styles.labels}>
              <input type='radio' name='enemyChoice' value='squidusa' id='squidusa' />
              <label htmlFor='squidusa'>Squidusa</label>
            </div>
            <div className={styles.labels}>
              <input type='radio' name='enemyChoice' value='smallDragon' id='smallDragon' />
              <label htmlFor='smallDragon'>Small Dragon</label>
            </div>
            <div className={styles.labels}>
              <input type='radio' name='enemyChoice' value='demon' id='demon' />
              <label htmlFor='demon'>Demon</label>
            </div>
            <div className={styles.labels}>
              <input type='radio' name='enemyChoice' value='bigDragon' id='bigDragon' />
              <label htmlFor='bigDragon'>Big Dragon</label>
            </div>
          </div>
          <StartMenu onStartClick={() => {
            let playerClass = playerClassChecker();
            let playerName = playerNameChecker();
            let enemy = enemyChecker();
            setpClass(playerClass)
            setpName(playerName);
            setFoe(enemy);
            enemy ? setMode('battle') : alert("You must select an opponent");
          }} />
        </>
      }

      {mode === 'battle' && (
        <Battle
          pClass={pClass}
          pName={pName}
          foe={foe}
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}

      {mode === 'gameOver' && (
        <EndMenu
          winner={winner}
          onStartClick={() => {
            setWinner(undefined);
            setMode('start');
          }}
        />
      )}
    </div>
  )
}

