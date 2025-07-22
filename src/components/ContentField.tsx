import {observer} from "mobx-react";
import {IpCalculator} from "./IpCalculator.tsx";

const ContentField = observer(()=>{
   return(
       <>
           <IpCalculator />
       </>
   )
});

export { ContentField };