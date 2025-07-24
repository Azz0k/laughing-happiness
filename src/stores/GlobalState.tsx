import { makeAutoObservable } from "mobx";


class GlobalState {
  public test: string | null = "mobx";
  public menuKeySelected = '1';
  public ipCalcMask = 24;
  public ipCalcAddress: string = "";
  public ipCalcValidated:boolean = false;
  public fetching = false;
  public error = "";
  public vlanData = null;

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
  async fetchDataVlanApi (organizationId:number) {
    this.fetching = true;
    this.error = "";
    try{
      console.log(organizationId);
      const response = await fetch(`https://localhost:7172/vlans/${organizationId}`);
      const data = await response.json();
      this.vlanData = data;
      console.log(data);
    }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(e){
      console.log(e);
      this.error = "Error fetching data";
    }
    finally {
      this.fetching = false;
    }
  }
}

const globalState = new GlobalState();
export {globalState};