import { ClusterOutlined } from "@ant-design/icons";
import {Space} from "antd";

const globalMenu = [
  { key: '1', icon: <ClusterOutlined />, label: 'Локальная сеть',
    children: [
      { key: '1.1', label: 'IP калькулятор' },
      { key: '1.2', label: 'VLAN и подсети',
      children: [
        { key: '1.1.1', label: 'Шушары' },
        { key: '1.1.2', label: 'МДЦ' },
        { key: '1.1.3', label: 'Ленинский' },
      ]},
    ],
  },

];
const vlanTableColumns = [
  {
    title: "Номер",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
    width: "30%",
  },
  {
    title: "Описание",
    dataIndex: "description",
    key: "description",
    render: (text) => text,
    width: "30%",
  },
  {
    title: "Подсеть",
    dataIndex: "lan",
    key: "lan",

  },
  {
    title: "Действия",
    key: "actions",
    render: ( )=>(<Space size="middle"><a>Edit</a><a>Delete</a></Space>)
  }
]
const cidrToMask = ["0.0.0.0","128.0.0.0","192.0.0.0","224.0.0.0","240.0.0.0","248.0.0.0","252.0.0.0","254.0.0.0","255.0.0.0","255.128.0.0","255.192.0.0","255.224.0.0","255.240.0.0","255.248.0.0","255.252.0.0","255.254.0.0","255.255.0.0","255.255.128.0","255.255.192.0","255.255.224.0","255.255.240.0","255.255.248.0","255.255.252.0","255.255.254.0","255.255.255.0","255.255.255.128","255.255.255.192","255.255.255.224","255.255.255.240","255.255.255.248","255.255.255.252","255.255.255.254","255.255.255.255"];
export {globalMenu, cidrToMask, vlanTableColumns};