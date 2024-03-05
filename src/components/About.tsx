import { Row, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
const About = () => {
    const [loading, setLoading] = useState(false);
    const [aboutData, setAboutData] = useState({
        Title: "Title",
        Desc1: "Desc1",
        Desc2: "desc2",
        ImageUrl: "image",
    });
    useEffect(() => {
        const getAbout = async () => {
            setLoading(true);
            const { data } = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/about`
            );
            setAboutData(data?.data);
            setLoading(false);
        };
        getAbout();
    }, []);

    return (
        <AboutStyled>
            <div className="about-top">
                <Row className="about-container">
                    {loading ? (
                        <Row
                            style={{ width: "100%", height: "100%" }}
                            justify={"center"}
                            align={"middle"}
                        >
                            <Spin
                                indicator={
                                    <LoadingOutlined
                                        style={{ fontSize: 50, color: "var(--app-primary-color)" }}
                                        spin
                                    />
                                }
                            />
                        </Row>
                    ) : (
                        <>
                            <Row className="about-title" justify={"center"} align={"middle"}>
                                <div className="about-title-text">{aboutData.Title}</div>
                            </Row>

                            <Row className="about-desc-1" justify={"center"} align={"middle"}>
                                <div className="about-desc-1-text">{aboutData.Desc1}</div>
                            </Row>
                            <Row className="about-desc-2" justify={"center"} align={"middle"}>
                                <div className="about-desc-2-text">
                                    {aboutData.Desc2}
                                </div>
                            </Row>
                        </>
                    )}
                </Row>
            </div>
        </AboutStyled>
    );
};

export default About;

const AboutStyled = styled.div`
  .about-top {
    min-height: calc(100vh - 207px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .about-container {
    max-width: 992px;
    margin: 0 auto;
  }

  .about-title {
    margin-top: 36px;
    color: #fff;
    font-weight: 800;
    width: 100%;
    font-family: "Protest Riot";
  }

  .about-title-text {
    padding: 10px;
    font-size: 70px;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: white;
    text-stroke-width: 0.5px;
    text-stroke-color: #ff00ff;
  }

  .about-desc-1 {
    margin-top: 35px;
    font-family: cursive;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 23px;
  }
  .about-desc-1-text {
    border-radius: 8px !important;
    max-width: 710px;
    background-color: #fff;
    padding: 8px;
    font-weight: 1000;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: white;
    text-stroke-width: 0.5px;
    text-stroke-color: #ff00ff;
  }
  .about-desc-2 {
    font-size: 23px;
    font-weight: 1000;
    color: white;
    margin-top: 35px;
    font-family: cursive;
    font-size: 20px;
    width: 100%;
    text-align: center;
    font-weight: 600;
  }
  .about-desc-2-text {
    border-radius: 8px !important;
    max-width: 710px;
    background-color: #fff;
    padding: 8px;
    font-weight: 1000;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: white;
    text-stroke-width: 0.5px;
    text-stroke-color: #ff00ff;
  }

  .about-img {
    padding-top: 35px;
    width: 100%;
    opacity: 0.9;
  }

  .coupleJellyFish {
    height: 420px;
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(-12deg);
    }
    to {
      transform: rotate(3deg);
    }
  }

  @media screen and (max-width: 768px) {
    .about-top {
      height: calc(100vh - 124px);
    }
    .about-title-text {
      font-size: 28px;
    }
  }
`;
