import { cons, car, cdr } from '@hexlet/pairs';
import { number, engine } from '../index';

const condition = 'What number is missing in the progression?';

const positionOrStep = () => {
  const result = Math.round(Math.random() * 10);
  console.log(result);
  return (result > 2) ? result : positionOrStep();
};

const progression = () => {
  const posAndStep = cons(positionOrStep(), positionOrStep());
  const question = [];
  let benchmark = (number());
  let rightAnsver = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === car(posAndStep)) {
      rightAnsver = `${benchmark}`;
      question[i] = ' ..';
    } else {
      question[i] = ` ${benchmark}`;
    }
    benchmark += cdr(posAndStep);
  }
  return cons(question, rightAnsver);
};

export default () => engine(condition, progression);
