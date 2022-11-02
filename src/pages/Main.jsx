import React from "react";
import {Col, Row} from 'antd';
import { Link } from "react-router-dom";
import "../styles/main.css";
import commentsIcon from "../images/comments.png";
import opensIcon from "../images/opens.png";

const MainBlock_1 = [
    {block: "big",
        title: "Коты да и только...",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},
    {block: "small",
        title: "Lorem Ipsum",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},
    {block: "small",
        title: "Lorem Ipsum",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},
    {block: "small",
        title: "Lorem Ipsum",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},

];
const MainBlock_2 = [
    {block: "big",
        title: "Коты да и только...",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},
    {block: "small",
        title: "Lorem Ipsum",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},
    {block: "small",
        title: "Lorem Ipsum",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},
    {block: "small",
        title: "Lorem Ipsum",
        path_image: "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg",
        text: "Lorem ipsum",
        link: "/",
        comments: "20",
        opens: "30"},

];

export default function Main() {
    return <>
    <Row gutter={[16, 16]} className={"main_row_left"}>
        <Col span={12} className={"main_layout_img"}>
            {MainBlock_1.map(elem => elem.block == "big" ? <Link className={"main_content_img"}
                                                            style={{backgroundImage: `url(${elem.path_image})`,
                                                            backgroundSize: "cover"}}
                                                            href={elem.link}>
                <h2 className={"main_content_img_text"}>{elem.title}</h2>
            </Link> : null)}
        </Col>
        <Col span={12} className={"main_layout_text"}>
            {MainBlock_1.map(elem => elem.block == "small" ? <Row className={"main_row_review_block"}>
                <Col span={16} className={"main_row_review_col_text"}>
                    <h3 className={"main_row_review_block_title"}>
                        {elem.title}
                    </h3>
                    <p className={"main_row_review_block_text"}>
                        {elem.text}
                    </p>
                    <div className={"main_row_review_block_icons"}>
                        <div className={"icon"}>
                            <img src={opensIcon} alt={"///"}/>
                        </div>
                        <div className={"enter_numbers"}>
                            {elem.opens}
                        </div>
                        <div className={"icon"}>
                            <img src={commentsIcon} alt={"///"}/>
                        </div>
                        <div className={"comments_numbers"}>{elem.comments}</div>
                    </div>
                </Col>
                <Col span={8} className={"main_row_review_col_img"}>
                    <img src={elem.path_image} alt={"load..."} />
                </Col>
            </Row> : null)}
        </Col>
    </Row>
    </>;
}
