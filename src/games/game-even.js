import { number, engine } from '../index';


const condition = 'Answer "yes" if number even otherwise answer "no".';

const questionAndRightAnswer = () => {
  const question = number();
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  const questionAnswer = [question, answer];
  return questionAnswer;
};

export default () => engine(condition, questionAndRightAnswer);
