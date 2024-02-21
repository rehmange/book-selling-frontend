import { useState, useEffect } from "react"
import { Row } from "antd"
import styled from "styled-components"
// import { coupleJellyfish } from "./globalImges"

import { background } from '~/components/globalImges'

const About = ({aboutData}:any) => {

    console.log(aboutData, "aboutData")


    return (
        <AboutStyled >
            <div className="about-top">


                <Row className="about-container">
                    <Row className="about-title" justify={'center'} align={'middle'}>
                        <div className="about-title-text">
                            {/* We are
                            JellyFish Press! */}
                        {aboutData.Title}
                        </div>
                    </Row>

                    <Row className="about-desc-1" justify={'center'} align={'middle'}>
                        <div className="about-desc-1-text">
                            {/* JellyFish Press is a global empowerment brand dedicated to raising the most inspired and confident generation of girls. */}
                            {aboutData.Desc1}
                        </div>


                    </Row>
                    <Row className="about-desc-2" justify={'center'} align={'middle'}>
                        <div className="about-desc-2-text">
                            {/* We believe in empowering girls to dream big, that amplifying stories of real-life women can lead to a more equal world, and that girls can and should do everything! */}
                            {aboutData.Desc2}
                        </div>
                    </Row>
                    {/* <Row className="about-img" justify={'center'} align={'middle'}>
                    <img src={coupleJellyfish} alt="coupleJellyFish" className="coupleJellyFish" />
                </Row> */}
                </Row>
            </div>
        </AboutStyled>
    )
}

export default About

const AboutStyled = styled.div`

.about-top{
    min-height: calc(100vh - 207px);
    /* height: 100px; */
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: center;
}

 /* background: linear-gradient(to right, #A03AA3, #f6bcca, #03A0DB); */
 /* min-height: calc(100vh - 164px); */

.about-container{
    max-width: 992px;
    margin: 0 auto;
}

.about-title{
    /* padding: 63px 0px 0px 0px; */
    margin-top: 83px;

    /* border-radius: 2px  ;
     */
    /* color: #9f3c9f; */
    color: #fff;

    font-weight: 800;

    width: 100%;
    font-family: 'Protest Riot';
    text-shadow: 0px 2px 4px #4eb5d0;
}

.about-title-text{
    padding: 10px;
    font-size: 48px;
    border: 3px solid #FF00FF;
}


.about-desc-1{

    margin-top: 35px;
    border-radius: 2px;
    font-family: cursive;
    /* padding-top: 35px; */
    font-size: 20px;
    /* color: #0f4f81; */
    color: #87CEFA;
    width: 100%;
    text-align: center;
    font-weight:600;
}
.about-desc-1-text{
    max-width: 710px;
    background-color: white;
    padding: 8px;
}
.about-desc-2{
    margin-top: 35px;
    /* background-color: white; */
    border-radius: 2px;
    font-family: cursive;
    /* padding-top: 35px; */
    font-size: 20px;
    /* color: #0f4f81; */
    color: #87CEFA;
    width: 100%;
    text-align: center;
    font-weight:600;

}
.about-desc-2-text{
    padding: 8px;
    max-width: 710px;
    background-color: white;
}


.about-img{
    padding-top: 35px;
    width: 100%;
    opacity: 0.9;
}

.coupleJellyFish{
    /* transform: rotate(-21deg); */
    height: 420px;
    /* animation: rotateAnimation 4s alternate infinite */
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
    .about-top{
    height: calc(100vh - 124px);
}
  }


`

