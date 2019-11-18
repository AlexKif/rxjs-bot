import {fromEvent, ObservableInput} from "rxjs";

import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {Config} from "./config";

const messageInputEl = document.querySelector('input[name="message"]') as HTMLInputElement;
const config: Config = new Config;

export const autocomplete = (config: any) => {
  fromEvent(config.input, 'input').pipe(
    map((e: Event) => (e.target as HTMLInputElement).value),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap(config.getData),
    
  ).subscribe(r => console.log(r))
};

autocomplete(Config);



