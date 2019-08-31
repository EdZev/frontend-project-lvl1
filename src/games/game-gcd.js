import { number, engine } from '../index';


const condition = 'Find the greatest common divisor of given numbers.';

const devider = (num1, num2) => {
  const larger = (num1 > num2) ? num1 : num2;
  const less = (num1 < num2) ? num1 : num2;
  if (less === 0) return larger;
  return devider(less, larger % less);
};

const greatestCommonDivisor = () => {
  const num1 = number();
  const num2 = number();
  if (num1 === 0 || num2 === 0) return greatestCommonDivisor();
  const result = [`${num1} ${num2}`, `${devider(num1, num2)}`];
  return result;
};

export default () => engine(condition, greatestCommonDivisor);
