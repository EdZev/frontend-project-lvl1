import playGame from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (num1, num2) => {
  const less = (num1 > num2) ? num2 : num1;
  const more = (num1 < num2) ? num2 : num1;
  if (less === 0) return more;
  return getCommonDivisor(less, more % less);
};

const getGameData = () => {
  const num1 = getRandomInteger();
  const num2 = getRandomInteger();
  const question = [num1, num2].join();
  const correctAnswer = getCommonDivisor(num1, num2).toString();
  return { question, correctAnswer };
};

export default () => playGame(task, getGameData);
