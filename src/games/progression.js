import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

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
  return cons(question.join(), answer.toString());
};

export default () => playGame(task, getGameData);
