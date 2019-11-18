import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';


const task = 'Find the greatest common divisor of given numbers.';

const getDenom = (num1, num2) => {
  const less = (num1 > num2) ? num2 : num1;
  const more = (num1 < num2) ? num2 : num1;
  if (less === 0) return more;
  return getDenom(less, more % less);
};

const getConditions = () => {
  const num1 = getRandomInteger();
  const num2 = getRandomInteger();
  if (num1 === 0 || num2 === 0) return getConditions();
  const gcd = getDenom(num1, num2);
  return cons(`${num1} ${num2}`, `${gcd}`);
};

export default () => playGame(task, getConditions);
