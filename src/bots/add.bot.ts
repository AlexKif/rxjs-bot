import {registry, Bot} from '../bot';
import {pipe} from "rxjs";
import {map, scan} from "rxjs/operators";

export const DENY_BOT: Bot = {
  name: 'adder',
  description: 'Number adder'
};

function findNumber(str: string): number {
  return parseInt(str.split(" ")[1]);
}

function append (acc: Array<number>, number:number): Array<number> {
  acc.push(number);
  return acc;
}

function joinExpression (numbers: number[]): string {
  const result:string  = numbers.join("+");
  let sum = numbers.reduce((a,b) => a + b);
  return result + "=" + sum
}

registry.addBot(DENY_BOT, pipe(
  map(findNumber),
  scan(append, [0]),
  map(joinExpression)
));



