import { observer } from "mobx-react";
import {Input, Button, Radio} from "antd";

const IpCalculator = observer(()=> {
    const radioButtons = Array.from({ length:32 }, (_, i) =>
        <Radio.Button value={i}>
            /{i}
        </Radio.Button>

    );
    return(
        <>
            <div className={"flex flex-wrap gap-10 p-5"}>
                <div className="w-1/3 min-w-[200px]">
                    <Input placeholder="Введи ip адрес" maxLength={20}/>
                </div>
                <span className="w-1/5 min-w-[120px] self-center">Выбери подсеть: </span>
                <Radio.Group defaultValue={24} >
                    {radioButtons}
                </Radio.Group>
            </div>
            <Button >Calculate</Button>
        </>
    );
});

export { IpCalculator };