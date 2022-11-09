import {Outlet} from "react-router-dom";
import {Col, Layout, Space} from "antd";
import Menu from "../components/Menu";
import Loader from "../components/Loader";
import React from "react";
import "antd/dist/antd.css";
import "../style.css";
import {useState, useEffect} from "react";

const {Header, Footer, Sider, Content} = Layout;

function Root() {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(!load);
    }, []);

    return (
        <>
            {load ? (
                <Layout style={{backgroundColor: "white"}}>
                    <Header className="header">
                        <div className="logo_wrapper">
                            <h1 className="logo">computeRReview</h1>
                        </div>
                        <a className="header_icon enter"></a>
                        <a className="header_icon register"></a>
                    </Header>
                    <Menu/>
                    <Layout className="main_layout">
                        <Sider>Sider</Sider>
                        <Content className="content">
                            <Outlet/>
                        </Content>
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
            ) : (
                <Loader/>
            )}
        </>
    );
}

export default Root;
