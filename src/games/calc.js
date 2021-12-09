import playGame from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const makeCalc = {
  '+': (num1, num2) => (num1 + num2),
  '-': (num1, num2) => (num1 - num2),
  '*': (num1, num2) => (num1 * num2),
};

const getGameData = () => {
  const operand1 = getRandomInteger();
  const operand2 = getRandomInteger();
  const operation = operations[getRandomInteger(0, 2)];
  const question = `${operand1} ${operation} ${operand2}`;
  const correctAnswer = makeCalc[operation](operand1, operand2).toString();
  return { question, correctAnswer };
};

export default () => playGame(task, getGameData);
