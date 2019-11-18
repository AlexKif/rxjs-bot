import {registry, Bot} from '../bot';
import {map, switchMap} from 'rxjs/operators';
import {interval} from "rxjs";

export const DENY_BOT: Bot = {
  name: 'deny',
  description: 'Deny is the queen!'
}

registry.addBot(DENY_BOT, switchMap(m =>
  interval(3000).pipe(
    map(i => "I am the Queen! And I need your love")
  )));


