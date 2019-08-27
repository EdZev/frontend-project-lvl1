import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');
export const introduce = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${userName}!\r\n`);
  return userName;
};

const evenNum = () => {
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const answer = [readlineSync.question('Your answer: '), rightAnswer];
  if (answer[0] === answer[1]) return true;
  return answer;
};

export const brainEven = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const answers = evenNum();
    if (answers !== true) {
      console.log(`"${answers[0]}" is wrong answer ;(. Correct answer was "${answers[1]}".`);
      return console.log("Let's try again");
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
