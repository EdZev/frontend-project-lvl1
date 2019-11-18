import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const task = 'What number is missing in the progression?';

const getConditions = () => {
  const startProgression = getRandomInteger();
  const stepProgression = getRandomInteger();
  const lengthProgression = 10;
  const hiddenPosition = Math.round(getRandomInteger() / 10);
  const hiddenElement = `${startProgression + stepProgression * hiddenPosition}`;
  const question = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    question[i] = (i === hiddenPosition) ? ' ..' : ` ${startProgression + stepProgression * i}`;
  }
  return cons(`${question}`, hiddenElement);
};

export default () => playGame(task, getConditions);
