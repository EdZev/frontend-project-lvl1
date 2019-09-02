import { cons, car, cdr } from '@hexlet/pairs';
import { number, engine } from '../index';


const condition = 'Find the greatest common divisor of given numbers.';

const devider = (num) => {
  const pair = (car(num) > cdr(num)) ? cons(cdr(num), car(num)) : num;
  if (car(pair) === 0) return cdr(pair);
  return devider(cons(car(pair), cdr(pair) % car(pair)));
};

const greatestCommonDivisor = () => {
  const numbers = cons(number(), number());
  if (car(numbers) === 0 || cdr(numbers) === 0) return greatestCommonDivisor();
  const result = cons(`${car(numbers)} ${cdr(numbers)}`, `${devider(numbers)}`);
  return result;
};

export default () => engine(condition, greatestCommonDivisor);
