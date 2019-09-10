import readlineSync from 'readline-sync';

export const getNameGamer = (gameCondition = false) => {
  console.log('Welcome to the Brain Games!');
  if (gameCondition) console.log(gameCondition);
  const nameGamer = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${nameGamer}!\r\n`);
  return nameGamer;
};

export const getRandomNumber = () => Math.round(Math.random() * 100);
