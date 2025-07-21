import { observer } from "mobx-react";
import {Layout, Menu} from "antd";
import {globalMenu} from "../config/constants.tsx";
import {globalState} from "../stores/GlobalState.tsx";

const Sidebar = observer(()=>{
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001529",
    color: "#fff",
  }
  const { Sider } = Layout;
  return (
    <Sider style={style}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={globalMenu}
        onSelect={(e)=>{globalState.handleSelectMenuItem(e.key)}}
      />
    </Sider>
  )
});

export { Sidebar };