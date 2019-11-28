import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const task = 'What number is missing in the progression?';

const lengthProgression = 10;

const getGameData = () => {
  const startProgression = getRandomInteger();
  const stepProgression = getRandomInteger();
  const hiddenElementPosition = getRandomInteger(0, lengthProgression - 1);
  const answer = startProgression + stepProgression * hiddenElementPosition;
  const question = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    question[i] = (i === hiddenElementPosition) ? ' ..' : startProgression + stepProgression * i;
  }
  return cons(question.join(), answer.toString());
};

export default () => playGame(task, getGameData);
