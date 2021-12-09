import getRandomInteger from '../utils.js';
import playGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomInteger();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => playGame(task, getGameData);
