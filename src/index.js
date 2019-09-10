import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { getNameGamer } from './utils';

const getAnswerGamer = (question) => {
  console.log(`Question: ${question}`);
  const answerGamer = readlineSync.question('Your answer: ');
  return answerGamer;
};

const outputMessageAboutError = (answerGamer, rightAnswer, nameGamer) => {
  console.log(`"${answerGamer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
  console.log(`Let's try again, ${nameGamer}!`);
};

const outputCoorect = () => console.log('Correct!');

const outputCongratulations = (nameGamer) => console.log(`Congratulations, ${nameGamer}!`);

export default (gameCondition, getQuestionAndRightAnswer) => {
  const nameGamer = getNameGamer(gameCondition);
  const numberRounds = 3;
  for (let i = 0; i < numberRounds; i += 1) {
    const questionAnswer = getQuestionAndRightAnswer();
    const answerGamer = getAnswerGamer(car(questionAnswer));
    if (cdr(questionAnswer) !== answerGamer) {
      return outputMessageAboutError(answerGamer, cdr(questionAnswer), nameGamer);
    }
    outputCoorect();
  }
  return outputCongratulations(nameGamer);
};
