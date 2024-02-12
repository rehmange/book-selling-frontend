import { Row } from "antd"
import styled from "styled-components"
import {coupleJellyfish} from "./globalImges"


const About = () => {
    return (
        <AboutStyled>
            <Row className="about-container">
                <Row className="about-title" justify={'center'} align={'middle'}>
                    {/* <Row> */}
                    We are
                    JellyFish Press!
                    {/* </Row> */}

                </Row>

                <Row className="about-desc-1" justify={'center'} align={'middle'}>
                    JellyFish Press is a global empowerment brand dedicated to raising the most inspired and confident generation of girls.
                </Row>
                <Row className="about-desc-2" justify={'center'} align={'middle'}>
                We believe in empowering girls to dream big, that amplifying stories of real-life women can lead to a more equal world, and that girls can and should do everything!
                </Row>
                <Row className="about-img" justify={'center'} align={'middle'}>
                    <img src={coupleJellyfish} alt="coupleJellyFish" className="coupleJellyFish"  />
                </Row>
            </Row>

        </AboutStyled>
    )
}

export default About

const AboutStyled = styled.div`
 background: linear-gradient(to right, #A03AA3, #f6bcca, #03A0DB);
 min-height: calc(100vh - 164px);

.about-container{
    max-width: 992px;
    margin: 0 auto;
}

.about-title{
    padding: 63px 0px 0px 0px;
    color: #9f3c9f;
    font-size: 41px;
    font-weight: 800;
    width: 100%;
    font-family: 'Protest Riot';
    text-shadow: 0px 2px 4px #4eb5d0;
}

.about-desc-1{
    font-family: cursive;
    padding-top: 35px;
    font-size: 20px;
    color: #0f4f81;
    width: 100%;
    text-align: center;
    font-weight:600;
}
.about-desc-2{
    font-family: cursive;
    padding-top: 35px;
    font-size: 20px;
    color: #0f4f81;
    width: 100%;
    text-align: center;
    font-weight:600;
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

`