import { cons, car, cdr } from '@hexlet/pairs';
import { number, engine } from '../index';

const condition = 'What is the result of the expression?';

const mathSign = (num) => {
  switch (Math.round(Math.random() * 2)) {
    case 0:
      return cons('-', car(num) - cdr(num));
    case 1:
      return cons('+', car(num) + cdr(num));
    default:
      return cons('*', car(num) * cdr(num));
  }
};

const questionAndRightAnswer = () => {
  const numbers = cons(number(), number());
  const signAndAnswer = mathSign(numbers);
  const question = `${car(numbers)} ${car(signAndAnswer)} ${cdr(numbers)}`;
  return cons(question, `${cdr(signAndAnswer)}`);
};

export default () => engine(condition, questionAndRightAnswer);
