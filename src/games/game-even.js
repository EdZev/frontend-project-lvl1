import { cons } from '@hexlet/pairs';
import { number, engine } from '../index';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndRightAnswer = () => {
  const question = number();
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(condition, questionAndRightAnswer);
