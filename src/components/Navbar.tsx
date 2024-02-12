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
                    <Row style={{ width: '100%' }} justify={"space-between"}>
                        {isTablet ? <>
                            <Col xs={8} className='logo' style={{ paddingLeft: "10px" }}>
                                {subNavbar || mobileShop ? <CloseOutlined onClick={() => { setSubNavbar(false); setMobileShop(false) }} /> : <MenuOutlined onClick={() => setSubNavbar(!subNavbar)} />}
                            </Col>
                            <Col xs={8} ><Row style={{ width: "100%", height: "100%" }} align={'middle'} justify={'center'}>
                                <Link to='/'><Row onClick={closeNavBar}> <img className='logo' src={logo} width={'100px'} /></Row> </Link>
                            </Row></Col>
                            <Col xs={8}></Col>
                        </> : <>
                            <Col md={8} ><Row style={{ width: "100%", height: "100%" }} align={'middle'} justify={"start"} >
                                <Link to='/'>
                                    <Row onClick={closeNavBar}>
                                        <img className='logo' src={logo} width={'100px'} />
                                    </Row>
                                </Link>
                            </Row>

                            </Col>
                            <Col md={16}>
                                <Row gutter={50} style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <Col className='menu' onClick={() => setSubNavbar(!subNavbar)}>
                                        Shop <CaretDownOutlined />
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
                subNavbar ? <SubNavbar mobileShop={mobileShop} setMobileShop={setMobileShop} setSubNavbar={setSubNavbar} /> : mobileShop ?
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
    color: #9d129d;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
  }
`