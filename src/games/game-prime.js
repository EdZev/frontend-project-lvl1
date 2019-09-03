import { cons } from '@hexlet/pairs';
import { number, engine } from '../index';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculator = (question) => {
  for (let i = question - 1; i > 1; i -= 1) {
    if (question % i === 0) return false;
  }
  return true;
};

const prime = () => {
  const question = number();
  const answer = (calculator(question)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(condition, prime);
