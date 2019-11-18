import { l, random } from '@hexlet/pairs-data';
import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const task = 'What is the result of the expression?';

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

const getConditions = () => {
  const operand1 = getRandomInteger();
  const operand2 = getRandomInteger();
  const listOperations = l('+', '-', '*');
  const operation = random(listOperations);
  return cons(`${operand1} ${operation} ${operand2}`, `${makeCalc(operand1, operand2, operation)}`);
};

export default () => playGame(task, getConditions);
