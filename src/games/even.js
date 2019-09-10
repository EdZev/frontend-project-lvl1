import { cons } from '@hexlet/pairs';
import startEngine from '../index';
import { getRandomNumber } from '../utils';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const playEven = () => {
  const numberForQuestion = getRandomNumber();
  const answer = (isEven(numberForQuestion)) ? 'yes' : 'no';
  return cons(`${numberForQuestion}`, answer);
};

export default () => startEngine(condition, playEven);
