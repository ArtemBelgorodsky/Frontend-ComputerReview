import React from "react";
import {Col, Row} from 'antd';
import "../styles/main.css";
import commentsIcon from "../images/comments.png";
import opensIcon from "../images/opens.png";


export default function Main() {
    return <>
    <Row gutter={[16, 16]} className={"main_row_left"}>
        <Col span={12} className={"main_layout_img"}>
            <div className={"main_content_img"}>
                <img
                    src={"https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg"}
                    alt={"load..."}/>
                <h2 className={"main_content_img_text"}>Коты да и только...</h2>
            </div>
            <div className={"main_content_img_text"}></div>
        </Col>
        <Col span={12} className={"main_layout_text"}>
            <Row className={"main_row_review_block"}>
                <Col span={16} className={"main_row_review_col_text"}>
                    <h3 className={"main_row_review_block_title"}>Lorem Ipsum</h3>
                    <p className={"main_row_review_block_text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    <div className={"main_row_review_block_icons"}>
                        <div className={"icon"}>
                            <img src={commentsIcon} alt={"///"}/>
                        </div>
                        <div className={"enter_numbers"}>1111</div>
                        <div className={"icon"}>
                            <img src={opensIcon} alt={"///"}/>
                        </div>
                        <div className={"comments_numbers"}>2222</div>
                    </div>
                </Col>
                <Col span={8} className={"main_row_review_col_img"}>
                    <img src={"https://lapkins.ru/upload/resize_cache/iblock/279/1024_500_2/27909e2ec654fdec7e45ded44c45e574.jpg"} alt={"load..."} />
                </Col>
            </Row>
            <Row className={"main_row_review_block"}>
                <Col span={16} className={"main_row_review_col_text"}>
                    <h3 className={"main_row_review_block_title"}>Lorem Ipsum</h3>
                    <p className={"main_row_review_block_text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                    </p>
                    <div className={"main_row_review_block_icons"}>
                        <div className={"icon"}>
                            <img src={commentsIcon} alt={"///"}/>
                        </div>
                        <div className={"enter_numbers"}>1111</div>
                        <div className={"icon"}>
                            <img src={opensIcon} alt={"///"}/>
                        </div>
                        <div className={"comments_numbers"}>2222</div>
                    </div>
                </Col>
                <Col span={8} className={"main_row_review_col_img"}>
                    <img src={"https://lapkins.ru/upload/resize_cache/iblock/279/1024_500_2/27909e2ec654fdec7e45ded44c45e574.jpg"} alt={"load..."} />
                </Col>
            </Row>
            <Row className={"main_row_review_block"}>
                <Col span={16} className={"main_row_review_col_text"}>
                    <h3 className={"main_row_review_block_title"}>Lorem Ipsum</h3>
                    <p className={"main_row_review_block_text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                    </p>
                    <div className={"main_row_review_block_icons"}>
                        <div className={"icon"}>
                            <img src={commentsIcon} alt={"///"}/>
                        </div>
                        <div className={"enter_numbers"}>1111</div>
                        <div className={"icon"}>
                            <img src={opensIcon} alt={"///"}/>
                        </div>
                        <div className={"comments_numbers"}>2222</div>
                    </div>
                </Col>
                <Col span={8} className={"main_row_review_col_img"}>
                    <img src={"https://lapkins.ru/upload/resize_cache/iblock/279/1024_500_2/27909e2ec654fdec7e45ded44c45e574.jpg"} alt={"load..."} />
                </Col>
            </Row>
        </Col>
    </Row>
        <Row gutter={[16, 16]} className={"main_row_left"}>
            <Col span={12} className={"main_layout_img"}>
                <div className={"main_content_img"}>
                    <img
                        src={"https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg"}
                        alt={"load..."}/>
                    <h2 className={"main_content_img_text"}>Коты да и только...</h2>
                </div>
                <div className={"main_content_img_text"}></div>
            </Col>
            <Col span={12} className={"main_layout_text"}>
                <Row className={"main_row_review_block"}>
                    <Col span={16} className={"main_row_review_col_text"}>
                        <h3 className={"main_row_review_block_title"}>Lorem Ipsum</h3>
                        <p className={"main_row_review_block_text"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                        <div className={"main_row_review_block_icons"}>
                            <div className={"icon"}>
                                <img src={commentsIcon} alt={"///"}/>
                            </div>
                            <div className={"enter_numbers"}>1111</div>
                            <div className={"icon"}>
                                <img src={opensIcon} alt={"///"}/>
                            </div>
                            <div className={"comments_numbers"}>2222</div>
                        </div>
                    </Col>
                    <Col span={8} className={"main_row_review_col_img"}>
                        <img src={"https://lapkins.ru/upload/resize_cache/iblock/279/1024_500_2/27909e2ec654fdec7e45ded44c45e574.jpg"} alt={"load..."} />
                    </Col>
                </Row>
                <Row className={"main_row_review_block"}>
                    <Col span={16} className={"main_row_review_col_text"}>
                        <h3 className={"main_row_review_block_title"}>Lorem Ipsum</h3>
                        <p className={"main_row_review_block_text"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                        <div className={"main_row_review_block_icons"}>
                            <div className={"icon"}>
                                <img src={commentsIcon} alt={"///"}/>
                            </div>
                            <div className={"enter_numbers"}>1111</div>
                            <div className={"icon"}>
                                <img src={opensIcon} alt={"///"}/>
                            </div>
                            <div className={"comments_numbers"}>2222</div>
                        </div>
                    </Col>
                    <Col span={8} className={"main_row_review_col_img"}>
                        <img src={"https://lapkins.ru/upload/resize_cache/iblock/279/1024_500_2/27909e2ec654fdec7e45ded44c45e574.jpg"} alt={"load..."} />
                    </Col>
                </Row>
                <Row className={"main_row_review_block"}>
                    <Col span={16} className={"main_row_review_col_text"}>
                        <h3 className={"main_row_review_block_title"}>Lorem Ipsum</h3>
                        <p className={"main_row_review_block_text"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                        <div className={"main_row_review_block_icons"}>
                            <div className={"icon"}>
                                <img src={commentsIcon} alt={"///"}/>
                            </div>
                            <div className={"enter_numbers"}>1111</div>
                            <div className={"icon"}>
                                <img src={opensIcon} alt={"///"}/>
                            </div>
                            <div className={"comments_numbers"}>2222</div>
                        </div>
                    </Col>
                    <Col span={8} className={"main_row_review_col_img"}>
                        <img src={"https://lapkins.ru/upload/resize_cache/iblock/279/1024_500_2/27909e2ec654fdec7e45ded44c45e574.jpg"} alt={"load..."} />
                    </Col>
                </Row>
            </Col>
        </Row>
    </>;
}
