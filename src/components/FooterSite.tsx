import { Col, Row } from 'antd'
import { FacebookOutlined, YoutubeOutlined, TikTokOutlined, PinterestOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, TwitterOutlined, ReadOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

const FooterSite = () => {

    const [links, setLinks] = useState([])

    useEffect(() => {
        const getLinks = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/social-link`)
            setLinks(data?.data)
        }
        getLinks()
    }, [])
    console.log(links,"Links")
    return (
        <FooterSiteStyled>
            <Row className="footer-container" justify={'center'} align={'middle'}>
                <Col md={12} xs={24} className='footer-left-text'>© {new Date().getFullYear()} JellyFish Press, Inc.</Col>
                <Col md={12} xs={24} className='social-icon-container'>
                    <Row gutter={20}>
                        <Col className='social-icon'><a href='https://www.facebook.com/' target='_blank'><FacebookOutlined className='social-icon-img' /></a></Col>
                        <Col className='social-icon'><YoutubeOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><InstagramOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><PinterestOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><TikTokOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><WhatsAppOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><LinkedinOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><TwitterOutlined className='social-icon-img' /></Col>
                        <Col className='social-icon'><ReadOutlined className='social-icon-img' /></Col>
                    </Row>


                </Col>
            </Row>
        </FooterSiteStyled>
    )
}

export default FooterSite

const FooterSiteStyled = styled.div`

background-color:#81cbe6;
.footer-container{
    max-width:992px;
    margin:0 auto;
    /* display: flex; */

    min-height: 62px;
    /* padding:20px 0px; */
}
.footer-left-text{
    font-weight:700;
    font-size:19px;
    color:#9d129d;
}
.social-icon{
    cursor:pointer;
    font-size:15px;
    transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1) 0s;
    
}
.social-icon:hover{
    transform: scale(1.2); /* Example transform on hover */
}
.social-icon-img{
    color:#9d129d;
    font-size:25px
}

@media screen and (max-width: 768px) {
    .footer-left-text{
        font-weight:500;
        font-size:19px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .social-icon-container{
        display:flex;
        justify-content:center;
        align-items:center;
    }
}
`