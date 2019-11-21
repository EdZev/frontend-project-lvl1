import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const task = 'What number is missing in the progression?';

const lengthProgression = 10;

const getGameData = () => {
  const startProgression = getRandomInteger();
  const stepProgression = getRandomInteger();
  const hiddenPosition = getRandomInteger(0, lengthProgression);
  const answer = String(startProgression + stepProgression * hiddenPosition);
  const question = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    question[i] = (i === hiddenPosition) ? ' ..' : ` ${startProgression + stepProgression * i}`;
  }
  return cons(String(question), answer);
};

export default () => playGame(task, getGameData);
