import { number, engine } from '../index';


const condition = 'What is the result of the expression?';

const questionAndRightAnswer = () => {
  const num1 = number();
  const num2 = number();
  const mathSign = Math.round(Math.random() * 2);
  let questionAnswer;
  switch (mathSign) {
    case 0:
      questionAnswer = [`${num1} - ${num2}`, `${num1 - num2}`];
      break;
    case 1:
      questionAnswer = [`${num1} + ${num2}`, `${num1 + num2}`];
      break;
    default:
      questionAnswer = [`${Math.round(num1 / 10)} * ${num2}`, `${Math.round(num1 / 10) * num2}`];
      break;
  }
  return questionAnswer;
};

export default () => engine(condition, questionAndRightAnswer);
