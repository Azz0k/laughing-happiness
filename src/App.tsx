
import './App.css'
import { Layout, } from "antd";
import { configure } from 'mobx';
import { observer } from 'mobx-react';
import { globalState } from "./stores/GlobalState.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import {ContentField} from "./components/ContentField.tsx";

configure({
  enforceActions: 'never',
});
const { Content, Header, Footer } = Layout;

const App = observer(() => {
  return (
    <>
      <Layout className="Container">
        <Header className="Header">{globalState.test}</Header>
        <Layout className="Container">
          <Sidebar />
          <Content className="Content">
            <ContentField />
          </Content>
        </Layout>
        <Footer className="Footer">Footer</Footer>
      </Layout>
    </>
  )
});

export default App;
