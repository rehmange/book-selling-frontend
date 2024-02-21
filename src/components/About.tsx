import { useState, useEffect } from "react"
import { Row } from "antd"
import styled from "styled-components"
// import { coupleJellyfish } from "./globalImges"
import axios from "axios";
import { background } from '~/components/globalImges'

const About = () => {
    const [aboutData, setAboutData] = useState({
        Title: "Title",
        Desc1: "Desc1",
        Desc2: "desc2",
        ImageUrl: "image",
    })
    console.log(aboutData, "aboutData")
    useEffect(() => {
        const getAbout = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/about`)
            setAboutData(data?.data)
        }
        getAbout()
    }, [])

    return (
        <AboutStyled >
            <div className="about-top">


                <Row className="about-container">
                    <Row className="about-title" justify={'center'} align={'middle'}>
                        We are
                    JellyFish Press!
                        {/* {aboutData.Title} */}
                    </Row>

                    <Row className="about-desc-1" justify={'center'} align={'middle'}>
                        JellyFish Press is a global empowerment brand dedicated to raising the most inspired and confident generation of girls.
                        {/* {aboutData.Desc1} */}
                    </Row>
                    <Row className="about-desc-2" justify={'center'} align={'middle'}>
                        We believe in empowering girls to dream big, that amplifying stories of real-life women can lead to a more equal world, and that girls can and should do everything!
                        {/* {aboutData.Desc2} */}
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
    padding: 63px 0px 0px 0px;
    margin-top: 35px;
    border-radius: 2px;
    /* color: #9f3c9f; */
    color: #FF00FF;
    font-size: 41px;
    font-weight: 800;
    width: 100%;
    font-family: 'Protest Riot';
    text-shadow: 0px 2px 4px #4eb5d0;
}

.about-desc-1{
    background-color: white;
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
.about-desc-2{
    margin-top: 35px;
    background-color: white;
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

