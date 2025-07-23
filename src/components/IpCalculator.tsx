import { observer } from "mobx-react";
import {Input, Button, Radio} from "antd";
import {globalState} from "../stores/GlobalState.tsx";
import {Address4} from "ip-address";

const IpCalculator = observer(()=> {
    const radioButtons = Array.from({ length:31 }, (_, i) =>
        <Radio.Button value={i} key={i}>
            /{i}
        </Radio.Button>
    );
    let networkAddress = "";
    let broadcastAddress = "";
    if (globalState.ipCalcValidated) {
        const ipAddressObject = new Address4(`${globalState.ipCalcAddress}/${globalState.ipCalcMask}`);
        networkAddress = ipAddressObject.startAddress().address;
        broadcastAddress = ipAddressObject.endAddress().address;
    }
    return(
        <>
            <div className={"flex flex-wrap gap-10 p-5"}>
                <div className="w-1/3 min-w-[200px]">
                    <Input placeholder="Введи ip адрес"
                           maxLength={15}
                           value={globalState.ipCalcAddress}
                           onChange={(e)=>globalState.handleIpCalcAddressChange(e.target.value)}
                    />
                </div>
                <span className="w-1/5 min-w-[120px] self-center">Выбери подсеть: </span>
                <Radio.Group
                    value={globalState.ipCalcMask}
                    onChange={(e)=>globalState.handleIpCalcMaskSelect(e.target.value)}
                >
                    {radioButtons}
                </Radio.Group>
            </div>
            <Button onClick={globalState.validateIpCalcAddress}>Calculate</Button>
            {globalState.ipCalcValidated && <p>Network: {networkAddress}</p>}
            {globalState.ipCalcValidated && <p>Broadcast: {broadcastAddress}</p>}
        </>
    );
});

export { IpCalculator };