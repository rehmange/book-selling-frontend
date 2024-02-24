import { useState } from 'react'
import styled from 'styled-components'


import { Row, Col } from 'antd'
import { CaretDownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';


import SubNavbar from "~/components/SubNavbar"
import MobileNavBarShop from '~/components/MobileNavBarShop';
import { logo } from "~/components/globalImges"

import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [subNavbar, setSubNavbar] = useState(false)
    const isTablet = useMediaQuery({ query: "(max-width:768px)" });
    const [mobileShop, setMobileShop] = useState(false)

    const closeNavBar = () => {
        setMobileShop(false);
        setSubNavbar(false)
    }

    return (
        <>
            <NavbarStyled>
                <Row className='header'>
                    <Row style={{ width: '100%' }} justify={"space-between"} >
                        {isTablet ? <>
                            <Col xs={4} className='logo'  >
                                <Row style={{ height: "100%", paddingLeft: "10px" }}>
                                    {subNavbar || mobileShop ? <CloseOutlined onClick={() => { setSubNavbar(false); setMobileShop(false) }}
                                        style={{ color: "#1E90FF" }}
                                    /> : <MenuOutlined onClick={() => setSubNavbar(!subNavbar)}
                                        style={{ color: "#1E90FF" }}
                                    />}
                                </Row>

                            </Col>
                            <Col xs={16}>
                                <Row align={'middle'} style={{ height: "100%" }} justify={"center"} className='nav-Line'>
                                    Dive into Depths, Find Strength & Brilliance
                                </Row>

                            </Col>
                            <Col xs={4} ><Row style={{ width: "100%", height: "100%" }} align={'middle'} justify={'end'}>
                                <Link to='/'><Row onClick={closeNavBar} style={{ padding: "5px 0px" }}> <img className='logo' src={logo} width={'50px'} /></Row> </Link>
                            </Row></Col>
                        </> : <>
                            <Col md={4} ><Row style={{ width: "100%", height: "100%" }} align={'middle'} justify={"start"} >
                                <Link to='/'>
                                    <Row onClick={closeNavBar} style={{ padding: "5px 0px" }}>
                                        <img className='logo' src={logo} width={'85px'} />
                                    </Row>
                                </Link>
                            </Row>

                            </Col>
                            <Col md={14}>
                                <Row align={'middle'} style={{ height: "100%" }} justify={"center"} className='nav-Line'>
                                    Dive into Depths, Find Strength & Brilliance
                                </Row>

                            </Col>
                            <Col md={6}>
                                <Row gutter={50} style={{ marginLeft: "0px", marginRight: "0px", width: "100%", height: "100%" }} align={'middle'} justify={"end"} >
                                    <Col className='menu' onClick={() => setSubNavbar(!subNavbar)}>
                                        Shop <CaretDownOutlined />
                                        {subNavbar ? <SubNavbar mobileShop={mobileShop} setMobileShop={setMobileShop} setSubNavbar={setSubNavbar} /> : null}
                                    </Col>
                                    <Col className='menu' onClick={closeNavBar}>
                                        <Link to='/about'> About </Link></Col>
                                </Row>
                            </Col>
                        </>
                        }
                    </Row>
                </Row>
            </NavbarStyled>

            {
                subNavbar && isTablet ? <SubNavbar mobileShop={mobileShop} setMobileShop={setMobileShop} setSubNavbar={setSubNavbar} /> : mobileShop ?
                    <MobileNavBarShop setMobileShop={setMobileShop} setSubNavbar={setSubNavbar} /> : null
            }

        </>
    )
}

export default Navbar

const NavbarStyled = styled.div`
box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
.header{
    max-width:992px;
    margin:0 auto;
    justify-content: space-between;
    align-items: center;
  }
.logo{
    cursor: pointer;

  }
  .menu{
    color:#1E90FF;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
  }
  .nav-Line{
    font-family: 'Pacifico';
    font-size: 28px;
    color:#1E90FF;
    font-weight: 800;
    padding-left: 30px;
  }

  @media screen and (max-width: 768px) {
    .nav-Line{
    font-size: 12px;
    padding-left: 0px;
  }
  .logo{
    padding-right: 5px;
  }
  }
`