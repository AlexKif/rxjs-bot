import {ObservableInput} from "rxjs";

class Config {
  input = document.querySelector('input[name="message"]') as HTMLInputElement;
  getData():ObservableInput<any>{
    return "Something"
  }
}
let config:Config=new Config;
