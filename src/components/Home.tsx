import { Col, Row, Spin } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { noAvaialable } from '~/components/globalImges'
import { LoadingOutlined } from '@ant-design/icons';
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [HomeData, setHomeData] = useState<any>({
        Title: "Title",
        Desc1: "Desc1",
        Desc2: "desc2",
        ImageUrl: "image",
    })
    useEffect(() => {
        const getHome = async () => {
            setLoading(true)
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/Landing`)
            setHomeData(data?.data)
            setLoading(false)
        }
        getHome()

    }, [])



    return (
        <HomeStyled >

            <Row className="home-container">

                {loading ?
                    <Row style={{ width: "100%", height: "100%" }} justify={'center'} align={'middle'}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "var(--app-primary-color)" }} spin />} />
                    </Row>
                    : <>
                        <Row className="home-title" justify={'center'} align={'middle'}>
                            <div className="home-title-text">
                                {/* We are
                            JellyFish Press! */}

                                {HomeData?.Description}
                            </div>
                        </Row>
                        <Row justify={'center'} align={'middle'} style={{ width: "100%" }}>
                            <Col lg={4}>
                                {HomeData?.LeftBook === null ? <img src={noAvaialable} width={"150px"} alt="image" style={{ marginTop: "20px" }} /> :
                                    <>
                                        <Link to={`/book/${HomeData?.LeftBook?.id}/${HomeData?.LeftBook?.Title?.replaceAll(" ", "-")}`}>
                                            <img src={HomeData?.LeftBook?.ImageLink} width={"200px"} alt="image" />
                                        </Link>
                                    </>
                                }
                            </Col>
                            <Col lg={16}>
                                <Row style={{ width: "100%" }} justify={"center"}>
                                    <iframe
                                        width="500"
                                        height="390"
                                        src={`https://www.youtube.com/embed/${HomeData?.VideoLink}`}
                                        title="YouTube Video Player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </Row>
                            </Col>
                            <Col lg={4}>
                                {HomeData?.RightBook === null ? <img src={noAvaialable} width={"150px"} alt="image" style={{ marginTop: "20px" }} /> :
                                    <>
                                        <Link to={`/book/${HomeData?.RightBook?.id}/${HomeData?.RightBook?.Title?.replaceAll(" ", "-")}`}>
                                            <img src={HomeData?.RightBook?.ImageLink} width={"200px"} alt="image" />
                                        </Link>
                                    </>
                                }
                            </Col>

                        </Row>
                        <Row style={{ width: "100%" }} justify={"center"}>
                            <Col sm={24}>
                                <Row justify={"center"} align={"middle"}>
                                    {HomeData?.BottomBook === null ? <img src={noAvaialable} width={"150px"} alt="image" style={{ marginTop: "20px" }} /> :
                                        <>
                                            <Link to={`/book/${HomeData?.BottomBook?.id}/${HomeData?.BottomBook?.Title?.replaceAll(" ", "-")}`}>
                                                <img src={HomeData?.BottomBook?.ImageLink} width={"200px"} alt="image" />
                                            </Link>
                                        </>
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </>}


            </Row >
        </HomeStyled >
    )
}

export default Home

const HomeStyled = styled.div`
    /* height: calc(100vh - 207px); */
.home-container{
    max-width: 992px;
    margin: 0 auto;
}
.home-title{
    /* margin-top: 36px; */
    color: #fff;
    font-weight: 800;
    width: 100%;
    font-family: 'Protest Riot';
}
.home-title-text{
    padding: 10px;
    font-size: 70px;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .5px;
    text-stroke-color: #FF00FF; 
}
@media screen and (max-width: 768px) {
    .home-title-text{
        font-size: 28px;
    }
  }

`
