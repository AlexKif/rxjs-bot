import {ObservableInput} from "rxjs";

export class Config {
  input = document.querySelector('input[name="message"]') as HTMLInputElement;
  getData():ObservableInput<any>{
    return "Something"
  }
}

