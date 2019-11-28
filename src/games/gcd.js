import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';


const task = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (num1, num2) => {
  const less = (num1 > num2) ? num2 : num1;
  const more = (num1 < num2) ? num2 : num1;
  if (less === 0) return more;
  return getCommonDivisor(less, more % less);
};

const getGameData = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const gcd = getCommonDivisor(num1, num2).toString();
  return cons([num1, num2].join(), gcd);
};

export default () => playGame(task, getGameData);
