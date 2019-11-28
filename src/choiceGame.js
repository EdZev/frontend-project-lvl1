import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';
import gcdGame from './games/gcd';
import progressionGame from './games/progression';
import primeGame from './games/prime';

const makeChoiceGame = () => {
  switch (readlineSync.question(`What game would you like to play?
Select the number of the game!
  1) brain-even
  2) brain-calc
  3) brain-gcd
  4) brain-progression
  5) brain-prime
  6) exit
Number: `)) {
    case '1':
      return evenGame();
    case '2':
      return calcGame();
    case '3':
      return gcdGame();
    case '4':
      return progressionGame();
    case '5':
      return primeGame();
    case '6':
      return console.log('Goodbye!');
    default:
      console.log('Try again, this number has no game!\n');
      return makeChoiceGame();
  }
};

export default () => {
  console.log('\nWelcome to the Brain Games!\n');
  makeChoiceGame();
};
