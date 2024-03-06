import { Col, Row, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { noAvaialable } from "~/components/globalImges";
import { LoadingOutlined } from "@ant-design/icons";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState("0");
  const [HomeData, setHomeData] = useState<any>({
    Title: "Title",
    Desc1: "Desc1",
    Desc2: "desc2",
    ImageUrl: "image",
  });
  useEffect(() => {
    const getHome = async () => {
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/Landing`);
      setHomeData(data?.data);
      setLoading(false);
      setPlay("1");
    };
    getHome();
  }, []);

  return (
    <HomeStyled>
      <Row className="home-container">
        {loading ? (
          <Row style={{ width: "100%", height: "100%" }} justify={"center"} align={"middle"}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "var(--app-primary-color)" }} spin />} />
          </Row>
        ) : (
          <>
            <Row className="home-title" justify={"center"} align={"middle"}>
              <div className="home-title-text">
                {/* We are
                            JellyFish Press! */}

                {HomeData?.Description}
              </div>
            </Row>
            <Row justify={"center"} align={"middle"} style={{ width: "100%" }}>
              <Col lg={6} className="leftImg">
                {HomeData?.LeftBook === null ? (
                  <img src={noAvaialable} width={"150px"} alt="image" style={{ marginTop: "20px" }} />
                ) : (
                  <Row justify={"center"}>
                    <Link to={`/book/${HomeData?.LeftBook?.id}/${HomeData?.LeftBook?.Title?.replaceAll(" ", "-")}`}>
                      <img src={HomeData?.LeftBook?.ImageLink} alt="image" /*  width={"250px"} */ className="bookImg" />

                      <span className="book-more" style={{ marginTop: "-7px" }}>
                        More Details
                      </span>
                    </Link>
                  </Row>
                )}
              </Col>
              <Col lg={12}>
                <Row style={{ width: "100%" }} justify={"center"}>
                  <iframe width="500" height="320" src={`https://www.youtube.com/embed/${HomeData?.VideoLink}?autoplay=${play}&mute=1`} title="YouTube Video Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Row>
              </Col>
              <Col lg={6} className="rightImg">
                {HomeData?.RightBook === null ? (
                  <img src={noAvaialable} width={"150px"} alt="image" style={{ marginTop: "20px" }} />
                ) : (
                  <Row justify={"center"}>
                    <Link to={`/book/${HomeData?.LeftBook?.id}/${HomeData?.LeftBook?.Title?.replaceAll(" ", "-")}`}>
                      <img src={HomeData?.RightBook?.ImageLink} alt="image" className="bookImg" />
                      <span className="book-more" style={{ marginTop: "-7px" }}>
                        More Details
                      </span>
                    </Link>
                  </Row>
                )}
              </Col>
            </Row>
            <Row style={{ width: "100%", marginTop: "20px" }} justify={"center"} className="bottomImg">
              <Col sm={24}>
                <Row justify={"center"} align={"middle"}>
                  {HomeData?.BottomBook === null ? (
                    <img src={noAvaialable} width={"150px"} alt="image" />
                  ) : (
                    <Col>
                      <Link to={`/book/${HomeData?.LeftBook?.id}/${HomeData?.LeftBook?.Title?.replaceAll(" ", "-")}`}>
                        <img src={HomeData?.BottomBook?.ImageLink} alt="image" className="bookImg" />
                        <span className="book-more" style={{ marginTop: "-7px" }}>
                          More Details
                        </span>
                      </Link>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Row>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  /* height: calc(100vh - 207px); */
  .home-container {
    max-width: 992px;
    margin: 0 auto;
  }
  .home-title {
    color: #fff;
    font-weight: 800;
    width: 100%;
    font-family: "Protest Riot";
  }
  .home-title-text {
    padding: 10px;
    font-size: 70px;
    color: white;
    -webkit-text-fill-color: #00008b;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: #00008b;
    text-stroke-width: 0.5px;
    text-stroke-color: #ff00ff;
  }

  .productImg {
    background: #87cefa;
    border-radius: 8px;
    height: 260px;
  }
  .bookImg {
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 8px 8px 0px 0px;
  }

  .book-more {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 300;
    border-radius: 0px 0px 8px 8px;
    background: #fff;
    border-radius: 0px 0px 8px 8px;
    padding-left: 0px;
    color: #00008b;
    -webkit-text-fill-color: #00008b;
    -webkit-text-stroke-width: 0.9px;
    -webkit-text-stroke-color: #00008b;
    text-fill-color: white;
    text-stroke-width: 0.9px;
    text-stroke-color: #00008b;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 768px) {
    .home-title-text {
      font-size: 26px;
    }
    .rightImg {
      margin-top: 20px;
    }
    .leftImg {
      margin-bottom: 8px;
    }
    .bottomImg {
      margin-bottom: 17px;
    }
  }
`;
