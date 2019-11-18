import {fromEvent, ObservableInput} from "rxjs";

import {debounceTime, map} from "rxjs/operators";

const messageInputEl = document.querySelector('input[name="message"]') as HTMLInputElement;

export const autocomplete = (config: any) => {
  fromEvent(config, 'input').pipe(
    map((e: Event) => (e.target as HTMLInputElement).value),
    debounceTime(200)
  ).subscribe(r => console.log(r))
};

autocomplete(messageInputEl);



