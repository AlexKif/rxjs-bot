import {registry, Bot} from '../bot';
import {pipe} from "rxjs";
import {map, throttleTime} from "rxjs/operators";

import {anecdotes} from "./anecdotes";

export const IMP_BOT: Bot = {
  name: 'imp',
  description: 'Go drink'
};

let count:number = 0;

function sayAnecdote (joke: string, index: number): string {
  if(count == anecdotes.length) count = 0;
  if ((index +1)%3 == 0) {
    return anecdotes[count++]
  }
  return "I am drunk";
}

registry.addBot(IMP_BOT, pipe(
  throttleTime(5000),
  map(sayAnecdote)
));
