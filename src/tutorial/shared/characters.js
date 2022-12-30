import enemySamus from '../../assets/enemySamus.png';
import enemyBill from '../../assets/enemyBill.png';
import hero from '../../assets/hero.png';
import mage from '../../assets/mage.png';
import ranger from '../../assets/ranger.png';
import warrior from '../../assets/warrior.png';
import fatGoblin from '../../assets/fatGoblin.png';
import demon from '../../assets/Demon.png';
import eyeSquid from '../../assets/eyeSquid.png';
import bigDragon from '../../assets/bigDragon.png';
import smallDragon from '../../assets/smallDragon.png';
import SpritePage from '../../assets/Monsters/Goblin/Attack3.png'
import styled, { keyframes } from 'styled-components'


const animation = keyframes`
  100% { background-position: -1800px; }
`;

export const AnimHero = styled.div`
  height: 150px;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${SpritePage}) left center;
  animation: ${animation} .8s steps(12) infinite; 
`;


export const playerStats = [
  {
    name: 'Warrior',
    level: 44,
    maxHealth: 177,
    img: warrior,
    magic: 28,
    attack: 60,
    defense: 30,
    magicDefense: 12,
  },
  {
    name: 'Ranger',
    level: 43,
    maxHealth: 190,
    img: ranger,
    magic: 35,
    attack: 50,
    defense: 35,
    magicDefense: 32,
  },
  {
    name: 'Mage',
    level: 45,
    maxHealth: 200,
    img: mage,
    magic: 50,
    attack: 19,
    defense: 25,
    magicDefense: 42,
  }
];

export const opponentStats = [
  {
    level: 25,
    name: 'Fat Goblin',
    maxHealth: 118,
    img: fatGoblin,

    magic: 18,
    attack: 23,
    defense: 12,
    magicDefense: 22,
  },
  {
    level: 31,
    name: 'Squidusa',
    maxHealth: 126,
    img: eyeSquid,

    magic: 30,
    attack: 27,
    defense: 18,
    magicDefense: 30,
  },
  {
    level: 51,
    name: 'Big Dragon',
    maxHealth: 185,
    img: bigDragon,

    magic: 48,
    attack: 50,
    defense: 30,
    magicDefense: 53,
  },
  {
    level: 44,
    name: 'Demon',
    maxHealth: 172,
    img: demon,

    magic: 45,
    attack: 38,
    defense: 27,
    magicDefense: 42,
  },
  {
    level: 37,
    name: 'Small Dragon',
    maxHealth: 155,
    img: smallDragon,

    magic: 32,
    attack: 31,
    defense: 29,
    magicDefense: 31,
  },

];