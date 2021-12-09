import playGame from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const firstPrime = 2;
  const biggestDivisor = num / 2;
  if (num < firstPrime) return false;
  for (let i = firstPrime; i <= biggestDivisor; i += 1) {
    if (num % i === 0 && num > firstPrime) return false;
  }
  return true;
};

const getGameData = () => {
  const question = getRandomInteger();
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => playGame(task, getGameData);
