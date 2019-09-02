import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

export const greeting = (condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${userName}!\r\n`);
  return userName;
};

export const number = () => Math.round(Math.random() * 100);

export const engine = (condition, qara) => {
  const gamerName = greeting(condition);
  for (let i = 0; i < 3; i += 1) {
    const questionAnswer = qara();
    console.log(`Question: ${car(questionAnswer)}`);
    const answeGamer = readlineSync.question('Your answer: ');
    if (cdr(questionAnswer) !== answeGamer) {
      console.log(`"${answeGamer}" is wrong answer ;(. Correct answer was "${cdr(questionAnswer)}".`);
      return console.log(`Let's try again, ${gamerName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${gamerName}!`);
};
