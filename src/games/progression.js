import playGame from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'What number is missing in the progression?';

const lengthProgression = 10;

const getGameData = () => {
  const start = getRandomInteger();
  const step = getRandomInteger();
  const hiddenElementPosition = getRandomInteger(0, lengthProgression - 1);
  const answer = start + step * hiddenElementPosition;
  const question = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    question[i] = (i === hiddenElementPosition) ? '..' : start + step * i;
  }
  return { question: question.join(' '), correctAnswer: answer.toString() };
};

export default () => playGame(task, getGameData);
