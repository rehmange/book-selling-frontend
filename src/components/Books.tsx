import styled from "styled-components";
import { Row, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
const Books = () => {
  const [loading, setLoading] = useState(false);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/book`);
      setBooksData(data?.data);
      setLoading(false);
    };
    getBooks();
  }, []);
  return (
    <BooksStyled>
      <Row className="books-Container">
        {loading ? (
          <Row style={{ width: "100%", height: "100%" }} justify={"center"} align={"middle"}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "var(--app-primary-color)" }} spin />} />
          </Row>
        ) : (
          <>
            <Row className="books-title" justify={"center"} align={"middle"}>
              Books
            </Row>
            <Row
              style={{
                width: "100%",
                marginLeft: "0px",
                marginRight: "0px",
                paddingBottom: "20px",
                justifyContent: "center",
              }}
              gutter={[{ xs: 0, sm: 0, md: 15, lg: 20 }, 20]}
            >
              {booksData?.map((book: any) => {
                return (
                  <Col md={8} xs={24}>
                    <Link
                      // className="book-price product-container"
                      to={`/book/${book?.BookID}/${book?.Title?.replaceAll(" ", "-")}`}
                    >
                      <Row justify={"center"}>
                        <Col span={24} className="productImg">
                          <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
                            <img src={book?.ImageLink?.split(",")?.at(0)} className="bookImg" />
                          </Row>
                        </Col>
                        <Col span={24} className="book-name">
                          <span className="book-name-title">{book?.Title}</span>
                        </Col>
                        <Col span={24} className="book-price">
                          <span>MSRP</span>: ${book?.Price} | More Details
                        </Col>
                      </Row>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </Row>
    </BooksStyled>
  );
};

export default Books;

const BooksStyled = styled.div`
  .books-Container {
    max-width: 992px;
    margin: 0 auto;
  }
  .books-title {
    padding: 25px 0px;
    width: 100% !important;
    color: #fafafa;
    font-weight: 900;
    font-size: 70px;
    font-family: "Protest Riot", sans-serif;

    color: white;
    -webkit-text-fill-color: #00008b;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: #00008b;
    text-stroke-width: 0.5px;
    text-stroke-color: #ff00ff;
  }

  .productImg {
    background: #fff;
    border-radius: 8px;
    height: 260px;
  }

  .book-name {
    margin-top: 5px;
    text-align: center;
    background: #fff;
    border-radius: 8px 8px 0px 0px;

    padding-left: 8px;
  }

  .book-name-title {
    font-size: 22px;
    font-weight: 600;
    color: #00008b;
    /* -webkit-text-fill-color: #00008b;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #00008b;
    text-fill-color: #00008b;
    text-stroke-width: 1px;
    text-stroke-color: #00008b; */
  }

  .book-price {
    font-size: 18px;
    font-weight: 600;
    background: #fff;
    border-radius: 0px 0px 8px 8px;
    padding-left: 8px;
    color: #00008b;
    /* -webkit-text-fill-color: #00008b;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: #00008b;
    text-fill-color: #00008b;
    text-stroke-width: 0.5px;
    text-stroke-color: #00008b; */
    padding-bottom: 5px;
    text-align: center;
  }

  .bookImg {
    width: 70%;
    transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1) 0s;
  }

  @media screen and (max-width: 768px) {
    .bookImg {
      width: 40%;
    }
    .book-name {
      padding-left: 8px;
    }
    .book-price {
      padding-left: 8px;
    }
  }
  @media screen and (max-width: 533px) {
    .bookImg {
      width: 60%;
    }
  }
  @media screen and (max-width: 417px) {
    .bookImg {
      width: 70%;
    }
  }
  @media screen and (max-width: 317px) {
    .bookImg {
      width: 80%;
    }
  }

  .product-container {
    cursor: pointer;
  }
`;
