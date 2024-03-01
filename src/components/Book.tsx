
import { useParams } from "react-router-dom";
import { Row, Col, Button, Spin } from "antd";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Browse from "./Browse";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Book = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [bookData, setBookData] = useState<any>([])

  useEffect(() => {
    const getBook = async () => {
      setLoading(true)
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/book/${id}`)
      setBookData(data?.data)
      setLoading(false)
    }
    getBook()
  }, [id])

  return (
    <BooksStyled>
      <Row className="book-container">

        {loading ?
          <Row style={{ width: "100%", height: "100%" }} justify={'center'} align={'middle'}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "var(--app-primary-color)" }} spin />} />
          </Row>
          : <>

            {
              bookData !== null ? <>
                <Col md={6} xs={24} style={{ paddingTop: "40px" }}>
                  <Browse />
                </Col>
                <Col md={18}>
                  <Row>
                    <Row className="book-title" justify={"center"} align={"middle"}>
                      <div className="book-title-text">
                        {bookData?.Title}

                      </div>
                    </Row>
                    <Row gutter={25} style={{ marginLeft: "0px", marginRight: "0px" }}>
                      <Col md={12} className="productImg">
                        <Row
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                          }}
                        >
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                              enabled: true,
                            }}
                            loop={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Pagination, Navigation]}
                            className="mySwiper"
                          >
                            {bookData?.ImageLink?.split(",").map((image: string, index: number) => {
                              return (
                                <div key={index}>
                                  <SwiperSlide
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <img src={image} className="book-page-img" />
                                  </SwiperSlide>
                                </div>
                              );
                            })}
                          </Swiper>
                        </Row>
                      </Col>
                      <Col md={12}>
                        <Row className="book-description">
                          {bookData?.Description}
                        </Row>
                        <Row className="book-i-price">
                          <strong>MSRP</strong> :{" "}
                          <span style={{ fontWeight: "500" }}>&nbsp; ${bookData?.Price}</span>
                        </Row>
                        <Row className="buy-text">Buy Now</Row>
                        <Row>
                          <Col style={{ width: "100%" }}>
                            <a href={bookData?.Amazon} target='_blank' style={{ display: 'flex', justifyContent: 'center' }}>
                              <Button className="buyBtn" style={{ width: "100%", border: "5px solid white" }}>
                                Amazon
                              </Button>
                            </a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Row>
                </Col>
              </>
                : <div className="not-available">
                  Not Available
                </div>
            }
          </>}
      </Row>
    </BooksStyled>
  );
};

export default Book;

const BooksStyled = styled.div`
padding-bottom:20px;
  .book-container {
    max-width: 992px;
    margin: 0 auto;
  }

  .book-title {
    padding: 25px 0px;
    width: 100%;

  }

.book-title-text{
  padding: 5px;
  color: #fafafa;
    font-weight: 900;
    font-size: 65px;
    font-family: "Protest Riot", sans-serif;
    /* text-shadow: 0px 5px 4px rgb(144 54 144);
    border: 3px solid #FF00FF; */
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .5px;
    text-stroke-color: #FF00FF; 
}

  .productImg {
    background: #87cefa;
    border-radius: 8px;
    height: 320px;
  }

  .book-page-img {
    width: 80%;
  }
  .book-small-img-container {
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    gap: 20px;
    width: 423px;
  }
  .book-small-img {
    height: 70px;
    width: 112px;
    border: 1px solid black;
  }

  .leftRightBtn {
    display: flex;
    font-size: 30px;
  }

  .book-description {
    font-size: 18px;
    font-weight: 900;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: 1px;
    text-stroke-color: #FF00FF; 
  }
  .book-i-price {
    font-size: 18px;
    margin-top: 20px;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: 1px;
    text-stroke-color: #FF00FF; 
  }

  .buy-text {
    font-size: 18px;
    font-weight: 800;
    margin-top: 20px;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: 1px;
    text-stroke-color: #FF00FF; 
  }

  .buyBtn {

    font-size: 18px;
    padding: 25px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: linear-gradient(to right, #04A0DB, #FF00FF);
    border: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .buyBtn:hover {
    background: linear-gradient(to right, #FF00FF, #04A0DB) !important;
    font-weight: 600;
    color: #fff !important;
  }

  .swiper-slide swiper-slide-active {
    display: flex !important;
    justify-content: center !important;
  }
  .swiper {
    height: 100%;
  }
  .swiper-pagination {
    top: 365px;
  }

  .not-available{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 227px);
    color: #fafafa;
    font-weight: 500;
    font-size: 45px;
    font-family: "Protest Riot", sans-serif;
    text-shadow: 0px 5px 4px rgb(144 54 144);
  }

  @media screen and (max-width: 768px) {
    .book-title {
      text-align: center;
      font-size: 26px;
      text-shadow: 0px 3px 4px rgb(144 54 144);
    }

    .productImg {
      height: 240px;
    }
    .book-page-img {
      width: 70%;
    }
    .swiper-pagination {
      top: 220px;
    }
  }
`;
