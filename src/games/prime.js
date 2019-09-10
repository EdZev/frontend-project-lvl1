import { cons } from '@hexlet/pairs';
import startEngine from '../index';
import { getRandomNumber } from '../utils';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const firstPrime = 2;
  if (num < firstPrime) return false;
  for (let i = firstPrime; i < num; i += 1) {
    if (num % i === 0 && num > firstPrime) return false;
  }
  return true;
};

const playPrime = () => {
  const numberForQuestion = getRandomNumber();
  const answer = (isPrime(numberForQuestion)) ? 'yes' : 'no';
  return cons(`${numberForQuestion}`, answer);
};

export default () => startEngine(condition, playPrime);
