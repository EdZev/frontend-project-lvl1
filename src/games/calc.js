import { l, random } from '@hexlet/pairs-data';
import { cons, car, cdr } from '@hexlet/pairs';
import startEngine from '../index';
import { getRandomNumber } from '../utils';

const condition = 'What is the result of the expression?';

const playCalc = () => {
  const num = cons(getRandomNumber(), getRandomNumber());
  const listOperations = l(
    cons(`${car(num)} + ${cdr(num)}`, `${car(num) + cdr(num)}`),
    cons(`${car(num)} - ${cdr(num)}`, `${car(num) - cdr(num)}`),
    cons(`${car(num)} * ${cdr(num)}`, `${car(num) * cdr(num)}`),
  );
  return random(listOperations);
};

export default () => startEngine(condition, playCalc);
