import { l, random } from '@hexlet/pairs-data';
import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const task = 'What is the result of the expression?';

const operations = l('+', '-', '*');

const makeCalc = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getGameData = () => {
  const operand1 = getRandomInteger();
  const operand2 = getRandomInteger();
  const operation = random(operations);
  const question = `${operand1} ${operation} ${operand2}`;
  const answer = `${makeCalc(operand1, operand2, operation)}`;
  return cons(question, answer);
};

export default () => playGame(task, getGameData);
