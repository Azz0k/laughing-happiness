import { makeAutoObservable } from "mobx";


class GlobalState {
  public test: string | null = "mobx";
  public menuKeySelected = '1';
  public ipCalcMask = 24;
  public ipCalcAddress: string = "";
  public ipCalcValidated:boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  handleSelectMenuItem(key:string) {
    this.menuKeySelected = key;
  }
  handleIpCalcMaskSelect(mask:number){
    this.ipCalcMask = mask;
  }
  handleIpCalcAddressChange(address:string){
    this.ipCalcValidated = false;
    const lastAddressSymbol = address.length - 1;
    if (address.length>0 && !("0123456789.,".includes(address[lastAddressSymbol])))
      return;
    address = address.replaceAll(",",".");
    this.ipCalcAddress = address.trim();
  }
  validateIpCalcAddress = ()=>{
    const pattern =/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
    this.ipCalcValidated = pattern.test(this.ipCalcAddress);
  }

}

const globalState = new GlobalState();
export {globalState};