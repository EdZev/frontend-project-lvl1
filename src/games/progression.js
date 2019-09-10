import { l, random, length } from '@hexlet/pairs-data';
import { cons } from '@hexlet/pairs';
import startEngine from '../index';
import { getRandomNumber } from '../utils';

const condition = 'What number is missing in the progression?';

const playProgression = () => {
  const startProgression = getRandomNumber();
  const stepProgression = getRandomNumber();
  const listOfPosiblePositions = l(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  const positionHiddenElement = random(listOfPosiblePositions);
  const question = [];
  let hiddenElement = '';
  let currentItem = startProgression;
  for (let i = 0; i < length(listOfPosiblePositions); i += 1) {
    if (i === positionHiddenElement) {
      hiddenElement = `${currentItem}`;
      question[i] = ' ..';
    } else {
      question[i] = ` ${currentItem}`;
    }
    currentItem += stepProgression;
  }
  return cons(`${question}`, hiddenElement);
};

export default () => startEngine(condition, playProgression);
