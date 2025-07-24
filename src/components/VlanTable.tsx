import { observer } from "mobx-react";
import {useEffect} from "react";
import {globalState} from "../stores/GlobalState.tsx";
import { Table } from "antd";
import {vlanTableColumns} from "../config/constants.tsx";
const VlanTable = observer (()=>{
    useEffect(()=>{
    globalState.fetchDataVlanApi(1).then();
  },[]);



  return (
    <>
      {globalState.vlanData!==null && <Table columns={vlanTableColumns} dataSource={globalState.vlanData}/>}
    </>
  );
});

export { VlanTable };