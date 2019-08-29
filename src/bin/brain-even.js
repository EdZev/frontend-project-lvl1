#!/usr/bin/env node
import { greeting, introduce, brainEven } from '../index';

greeting();
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = introduce();
brainEven(userName);
