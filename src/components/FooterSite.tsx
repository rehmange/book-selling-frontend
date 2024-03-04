import { Button, Col, Row } from 'antd'
import { FacebookOutlined, YoutubeOutlined, TikTokOutlined, PinterestOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, XOutlined, ReadOutlined, WarningOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useMediaQuery } from "react-responsive";
import { email } from './globalImges'
import EmailCapture from './EmailCapture'
import { Link } from 'react-router-dom'
const FooterSite = () => {
    const [open, setOpen] = useState(false)
    const [links, setLinks] = useState([])
    const isTablet = useMediaQuery({ query: "(max-width:768px)" });
    useEffect(() => {
        const getLinks = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/social-link`)
            setLinks(data?.data)
        }
        getLinks()
    }, [])

    const socialIcon = (type: string) => {
        switch (type) {
            case "facebook":
                return <FacebookOutlined className='social-icon-img' />
            case "youtube":
                return <YoutubeOutlined className='social-icon-img' />
            case "instagram":
                return <InstagramOutlined className='social-icon-img' />
            case "pinterest":
                return <PinterestOutlined className='social-icon-img' />
            case "tiktok":
                return <TikTokOutlined className='social-icon-img' />
            case "whatsapp":
                return <WhatsAppOutlined className='social-icon-img' />
            case "linkedin":
                return <LinkedinOutlined className='social-icon-img' />
            case "twitter":
                return <XOutlined className='social-icon-img' />
            case "docs":
                return <ReadOutlined className='social-icon-img' />
            default:
                return <WarningOutlined className='social-icon-img' />
        }
    }

    console.log(links, "Links")
    return (
        <>
            <EmailCapture open={open} setOpen={setOpen} />

            <FooterSiteStyled>
                <Row className="footer-container" justify={{ xs: 'center', sm: 'center', md: 'space-between' }} align={'middle'}>
                    {!isTablet && <>
                        <Col md={6} xs={24} className='footer-left-text'>© {new Date().getFullYear()} Jellyfish Press, Inc.</Col>
                        <Col md={6} xs={24} className='footer-email-text'><Link to="mailto:info.jellyfishpress@gmail.com">info.jellyfishpress@gmail.com </Link></Col>
                    </>}
                    {isTablet ? <>
                        <Col>
                            <Row>
                                <Col ><div className="email-icon">
                                    <img src={email} className='email-pic' alt="Email Icon" />
                                    <span className="icon-text">Exclusive Offers & News</span>
                                    <span className="icon-text-signup">SIGN UP TODAY!</span>
                                    <Button className='signUpBtn-email' onClick={() => setOpen(!open)} >
                                        Sign Up
                                    </Button>
                                </div></Col>
                            </Row>
                        </Col>
                        <Col md={12} xs={24} className='footer-left-text'>© {new Date().getFullYear()} Jellyfish Press, Inc.</Col>
                        <Col md={12} xs={24} className='footer-email-text'><Link to="mailto:info.jellyfishpress@gmail.com">info.jellyfishpress@gmail.com </Link></Col>
                        <Col md={12} xs={24} className='social-icon-container'>
                            <Row gutter={20} style={{ marginLeft: "0px", marginRight: "0px" }}>
                                {links?.map((item: any) => {
                                    return <Col key={item?.SocialLinkId} className='social-icon'>
                                        <a href={item?.Url} target='_blank'>
                                            {socialIcon(item?.Type)}
                                        </a>
                                    </Col>
                                })}
                            </Row>
                        </Col>

                    </>
                        : <> <Col md={12}>
                            <Row gutter={20} style={{ marginLeft: "0px", marginRight: "0px" }} justify={"end"}>
                                {links?.map((item: any) => {
                                    console.log(item, "itemm")
                                    return <Col key={item?.SocialLinkId} className='social-icon'>
                                        <a href={item?.Url} target='_blank' style={{ display: 'flex', justifyContent: 'center' }}>
                                            {socialIcon(item?.Type)}
                                        </a>
                                    </Col>
                                })}
                                <Col style={{ paddingLeft: "36px", paddingRight: "50px" }}>
                                    <Row justify={"end"} ><div className="email-icon">
                                        <img src={email} className='email-pic' alt="Email Icon" />
                                        <span className="icon-text">Exclusive Offers & News</span>
                                        <span className="icon-text-signup">SIGN UP TODAY!</span>
                                        <Button className='signUpBtn-email' onClick={() => setOpen(!open)} >
                                            Sign Up
                                        </Button>
                                    </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        </>
                    }




                </Row>
            </FooterSiteStyled >
        </>
    )
}

export default FooterSite

const FooterSiteStyled = styled.div`

/* background-color:#81cbe6; */
/* position: absolute; */
    width: 100%;
background-color:#87CFEA !important;

.footer-container{
    max-width:992px;
    margin:0 auto;
    /* display: flex; */

    min-height: 62px;
    overflow: hidden;
    /* padding:20px 0px; */
}
.footer-left-text{
    font-weight:700;
    font-size:16px;
    color:#1E90FF;
}
.footer-email-text{
    cursor: pointer;
    font-weight:700;
    font-size:16px;
    color:#1E90FF;
}
.social-icon{
    display: flex;
    justify-content: center;
    cursor:pointer;
    font-size:15px;
    transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1) 0s;

}

.social-icon-img{
    color:#FF00FF;
    font-size:25px
}

.social-icon-img:hover{
    transform: scale(1.1); 
}



.email-pic{
    height: 77px;
    width: 101px;
}

.email-icon {
    padding-top: 25px;
    position: relative;
    display: inline-block;
    /* width: 300px; */
}

.icon-text {
    font-family: 'Protest Riot';
    font-size: 20px;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 500;
    color: #fff;
    /* color:#1E90FF; */
    /* color:#FF00FF; */
    width: max-content;
    position: absolute;
    bottom: 68px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 900;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: .4px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .4px;
    text-stroke-color: #FF00FF;
    /* border: #FF00FF 1px solid;
    padding: 1px; */
}

.icon-text-signup{
    font-family: 'Protest Riot';
    font-size: 20px;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 800;
    color: #fff;
    /* color:#FF00FF; */
    /* color:#1E90FF; */
    width: max-content;
    position: absolute;
    bottom: 42px;
    left: 50%;
    transform: translateX(-50%);
    /* border: #FF00FF 1px solid; */
    /* border-top: 0px; */
    padding: 1px;
    font-weight: 900;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: .4px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .4px;
    text-stroke-color: #FF00FF;
}

.signUpBtn-email {

    position: absolute;
  bottom: 13px; 
  left: 50%;
  transform: translateX(-50%);

    background: linear-gradient(to right, #04A0DB, #FF00FF);
    border: none;
    color: white;
    font-weight: 600;
    // padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
.signUpBtn-email:hover{
    background: linear-gradient(to right, #FF00FF, #04A0DB) !important;
    font-weight: 600;
    color:#fff !important;
}





@media screen and (max-width: 768px) {
    .footer-left-text{
        font-weight:500;
        font-size:16px;
        text-align: center;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .footer-email-text{
        font-weight:500;
        font-size:16px;
        text-align: center;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-bottom: 5px;
}
    .social-icon-container{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .email-icon {
    padding-top: 15px;
    position: relative;
    display: inline-block;
    /* width: 300px; */
}
.icon-text {
    font-size: 18px;
    bottom: 67px;
}

.icon-text-signup{
    font-size: 17px;
    bottom: 46px;
}

}
`