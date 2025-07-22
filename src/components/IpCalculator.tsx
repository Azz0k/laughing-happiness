import { observer } from "mobx-react";
import {Flex, Input, Button, Radio} from "antd";

const IpCalculator = observer(()=> {
    const radioButtons = Array.from({ length:32 }, (_, i) =>
        <Radio.Button value={i}>
            /{i}
        </Radio.Button>

    );
    return(
        <>
            <Flex gap={10} style={{padding: "20px",}} >
                <div style={{width:"30%",}}>
                    <Input placeholder="Введи ip адрес" maxLength={20} style={{width: "100%", minWidth:"200px", boxSizing: "border-box"}}/>
                </div>
                <span style={{width:"20%",}}>Выбери подсеть: </span>
                <Radio.Group defaultValue={1} >
                    {radioButtons}
                </Radio.Group>
            </Flex>
            <Button >Calculate</Button>
        </>
    );
});

export { IpCalculator };