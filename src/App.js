import { Layout } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "./style.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout>
      <Header className="header">
        <div className="header_icon enter"></div>
        <div className="header_icon register"></div>
      </Header>
      <div className="logo_wrapper">
        <h1 className="logo">computeRReview</h1>
      </div>
      <Layout className="main_layout">
        <Sider span={4}>Sider</Sider>
        <Content span={16}>Content</Content>
        <Sider span={4}>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </>
);
export default App;
