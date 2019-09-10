import { cons } from '@hexlet/pairs';
import startEngine from '../index';
import { getRandomNumber } from '../utils';


const condition = 'Find the greatest common divisor of given numbers.';

const getDenom = (firstNum, secondNum) => {
  const lowerNum = (firstNum > secondNum) ? secondNum : firstNum;
  const greaterNum = (firstNum < secondNum) ? secondNum : firstNum;
  if (lowerNum === 0) return greaterNum;
  return getDenom(lowerNum, greaterNum % lowerNum);
};

const playGcd = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  if (firstNum === 0 || secondNum === 0) return playGcd();
  const gcd = getDenom(firstNum, secondNum);
  return cons(`${firstNum} ${secondNum}`, `${gcd}`);
};

export default () => startEngine(condition, playGcd);
