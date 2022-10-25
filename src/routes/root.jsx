import { Col, Layout, Row, Tabs } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "../style.css";

const { Header, Footer, Sider, Content } = Layout;

const Root = () => (
  <>
    <Layout>
      <Header className="header">
        <div className="logo_wrapper">
          <h1 className="logo">computeRReview</h1>
        </div>
        <a className="header_icon enter"></a>
        <a className="header_icon register"></a>
      </Header>
      <Row className="tabs_menu">
        <Col>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
      <Layout className="main_layout">
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer className="footer">
        <Col className="map_site" span={6}>
          <div className="map_site_text">
            <h3>Карта сайта:</h3>
            <a href="">В начало страницы</a>
            <a href="">Обзоры</a>
            <a href="">Аналитика</a>
            <a href="">Наш магазин</a>
          </div>
        </Col>
        <Col className="rights" span={11}>
          <div className="rights_text">
            <h3>2022 ALL RIGHTS RESERVED ©</h3>
          </div>
        </Col>
        <Col className="questions" span={7}>
          <div className="questions_text">
            <h3>Остались вопросы или есть предложения?</h3>
            <a href="">Пишите нам: lorem@ipsum.ru</a>
          </div>
        </Col>
      </Footer>
    </Layout>
  </>
);
export default Root;
