import {observer} from "mobx-react";
import {IpCalculator} from "./IpCalculator.tsx";
import {globalState} from "../stores/GlobalState.tsx";

const ContentField = observer(()=>{
    let SelectedElement;
    switch (globalState.menuKeySelected){
        case '1.1':
            SelectedElement = <IpCalculator />;
            break;
        default:
            SelectedElement = null;
    }

   return(
       <>
           {SelectedElement}
       </>
   )
});

export { ContentField };