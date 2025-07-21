import { makeAutoObservable } from "mobx";

class GlobalState {
  public test: string | null = "mobx";
  public menuKeySelected = '1';
  constructor() {
    makeAutoObservable(this);
  }
  handleSelectMenuItem(key:string) {
    this.menuKeySelected = key;
    console.log(this.menuKeySelected);
  }

}

const globalState = new GlobalState();
export {globalState};