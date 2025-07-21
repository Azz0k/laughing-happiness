import { ClusterOutlined } from "@ant-design/icons";

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
  ,
];
export {globalMenu};