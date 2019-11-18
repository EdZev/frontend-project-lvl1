import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  const firstPrime = 2;
  const biggestDivisor = num / 2;
  if (num < firstPrime) return false;
  for (let i = firstPrime; i <= biggestDivisor; i += 1) {
    if (num % i === 0 && num > firstPrime) return false;
  }
  return true;
};

const getConditions = () => {
  const numberForQuestion = getRandomInteger();
  const answer = (checkPrime(numberForQuestion)) ? 'yes' : 'no';
  return cons(`${numberForQuestion}`, answer);
};

export default () => playGame(task, getConditions);
