import React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "../styles/main.css";
import axios from "axios";
//import commentsIcon from "../images/comments.png";
//import opensIcon from "../images/opens.png";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/main`).then((res) => setData(res.data));
  }, []);

  return (
    <>
      {data.map((elem) => (
        <Row
          gutter={[16, 16]}
          className={"main_row_left"}
          style={{ flexDirection: elem.type }}
        >
          <Col span={12} className={"main_layout_img"}>
            {elem.content.map((elem) =>
              elem.block == "big" ? (
                <Link
                  to={`/news/${elem.link}`}
                  className={"main_content_img"}
                  style={{
                    backgroundImage: `url(${elem.path_image})`,
                    backgroundSize: "cover",
                  }}
                  href={elem.link}
                >
                  <h2 className={"main_content_img_text"}>{elem.title}</h2>
                </Link>
              ) : null
            )}
          </Col>
          <Col span={12} className={"main_layout_text"}>
            {elem.content.map((elem) =>
              elem.block == "small" ? (
                <Link
                  className={"main_row_review_block"}
                  to={`/news/${elem.link}`}
                >
                  <Col span={16} className={"main_row_review_col_text"}>
                    <h3 className={"main_row_review_block_title"}>
                      {elem.title}
                    </h3>
                    <p className={"main_row_review_block_text"}>{elem.text}</p>
                    <div className={"main_row_review_block_icons"}>
                      <div className={"icon"}>
                        {/*<img src={opensIcon} alt={"///"} />*/}
                      </div>
                      <div className={"enter_numbers"}>{elem.opens}</div>
                      <div className={"icon"}>
                        {/*<img src={commentsIcon} alt={"///"} />*/}
                      </div>
                      <div className={"comments_numbers"}>{elem.comments}</div>
                    </div>
                  </Col>
                  <Col span={8} className={"main_row_review_col_img"}>
                    <img src={elem.path_image} alt={"load..."} />
                  </Col>
                </Link>
              ) : null
            )}
          </Col>
        </Row>
      ))}
    </>
  );
}
