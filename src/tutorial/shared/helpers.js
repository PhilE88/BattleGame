export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms);
  });

export const attack = ({ attacker, receiver }) => {
  let rndNum = Math.floor(Math.random() * 6) + 1;
  let receivedDamage =
    // attacker.attack - (attacker.level - receiver.level) * 1.25;
    ((attacker.attack * (attacker.level / 100)) + attacker.attack);
  let blockedDamage =
    ((receiver.defense * (receiver.level / 100)) + (receiver.defense / 2));
  if (rndNum == 3) {
    receivedDamage += receivedDamage;
    console.log('Critical Hit!')
  }
  if (rndNum == 5) {
    blockedDamage += blockedDamage;
    console.log('Power Defense!')
  }

  // const finalDamage = receivedDamage - receiver.defense / 2;
  const finalDamage = receivedDamage - blockedDamage;
  if (finalDamage < 0) {
    return 1;
  }
  return finalDamage;
};

export const magic = ({ attacker, receiver }) => {
  const receivedDamage =
    // attacker.magic - (attacker.level - receiver.level) * 1.25;
    ((attacker.magic * (attacker.level / 100)) + attacker.magic);
  const blockedDamage =
    ((receiver.magicDefense * (receiver.level / 100)) + (receiver.magicDefense / 2));

  // const finalDamage = receivedDamage - receiver.magicDefense / 2;
  const finalDamage = receivedDamage - blockedDamage;
  if (finalDamage < 0) {
    return 1;
  }
  return finalDamage;
};

export const heal = ({ receiver }) => {
  return receiver.magic + receiver.level * 0.25;
};