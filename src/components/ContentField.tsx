import {observer} from "mobx-react";
import {IpCalculator} from "./IpCalculator.tsx";
import {globalState} from "../stores/GlobalState.tsx";
import {VlanTable} from "./VlanTable.tsx";

const ContentField = observer(()=>{
    let SelectedElement;
    switch (globalState.menuKeySelected){
        case "1.1":
            SelectedElement = <IpCalculator />;
            break;
        case "1.1.1":
            SelectedElement = <VlanTable />
            break;
        default:
            SelectedElement = null;
    }

   return(
       <div className="w-full">
           {SelectedElement}
       </div>
   )
});

export { ContentField };