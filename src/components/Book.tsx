
import { Row, Col, Button } from "antd";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Browse from "./Browse";

const Book = () => {
  const images = [
    "https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png",
    "https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Angle.png",
    "https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png",
    "https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Angle.png",
    "https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png",
  ]; // List of image URLs

  return (
    <BooksStyled>
      <Row className="book-container">
        <Col md={6} xs={24} style={{ paddingTop: "40px" }}>
          <Browse />
        </Col>
        <Col md={18}>
          <Row>
            <Row className="book-title" justify={"center"} align={"middle"}>
              Good Night Stories for Rebel Girls: Baby’s First Book of
              Extraordinary Women
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
                    {images?.map((image, index) => {
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
                  This board book adaptation of the New York Times bestselling
                  Good Night Stories for Rebel Girls series introduces your
                  little reader to the lives of extraordinary Rebel women.
                </Row>
                <Row className="book-i-price">
                  <strong>MSRP</strong> :{" "}
                  <span style={{ fontWeight: "500" }}>&nbsp; $9.99</span>
                </Row>
                <Row className="buy-text">Buy Now</Row>
                <Row>
                  <Button className="buyBtn" style={{ width: "100%" }}>
                    Amazon
                  </Button>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </BooksStyled>
  );
};

export default Book;

const BooksStyled = styled.div`
padding-bottom:20px;
  background-color: #fff;
  .book-container {
    max-width: 992px;
    margin: 0 auto;
  }

  .book-title {
    padding: 25px 0px;
    width: 100%;
    color: #02a1db;
    font-weight: 500;
    font-size: 45px;
    font-family: "Protest Riot", sans-serif;
    text-shadow: 0px 5px 4px rgb(144 54 144);
  }

  .productImg {
    // background: #f4f4f4;
    background: #ffc6d4;
    height: 400px;
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
    font-weight: 600;
    color: #0f4f81;
  }
  .book-i-price {
    font-size: 18px;
    color: #0f4f81;
    margin-top: 20px;
  }

  .buy-text {
    font-size: 18px;
    font-weight: 800;
    color: #0f4f81;
    margin-top: 20px;
  }

  .buyBtn {
    font-size: 18px;
    padding: 25px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: linear-gradient(to right, #04a0db, #a13ba1);
    border: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .buyBtn:hover {
    background: linear-gradient(to right, #a13ba1, #04a0db) !important;
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

  @media screen and (max-width: 768px) {
    .book-title {
      text-align: center;
      font-size: 26px;
      text-shadow: 0px 3px 4px rgb(144 54 144);
    }

    .productImg {
      height: 260px;
    }
    .book-page-img {
      width: 70%;
    }
    .swiper-pagination {
      top: 232px;
    }
  }
`;
