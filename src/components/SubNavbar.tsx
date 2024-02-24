import { Row, Col, Divider } from 'antd';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import { CaretRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SubNavbar = ({ mobileShop, setMobileShop, setSubNavbar }: any) => {
    const isTablet = useMediaQuery({ query: "(max-width:768px)" });

    const closeNavBar = () => {
        setMobileShop(false);
        setSubNavbar(false)
    }

    return (<>
        <SubNavbarStyled>
            {isTablet ?
                <Row align={"middle"}>
                    <Col xs={24} style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: "10px" }} onClick={() => {
                        setMobileShop(!mobileShop); setSubNavbar(false);
                    }}>Shop <CaretRightOutlined /></Col>
                    <Divider dashed style={{ margin: 0, backgroundColor: "white" }} />
                    <Col xs={24} style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: "10px" }} onClick={closeNavBar}><Link to='/about'>About Us</Link></Col>
                </Row>
                : <Row className='sub-navbar-container' >
                    <Col className='sub-navbar-menu' md={24} onClick={closeNavBar}><Link to='/books'>Books </Link></Col>
                    <Col className='sub-navbar-menu' md={24} >Merchandise</Col>
                </Row>}
        </SubNavbarStyled>
    </>

    )
}

export default SubNavbar
const SubNavbarStyled = styled.div`
border-top:#ff00ff 5px solid;
box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
line-height: normal;
height: 77px;
background-color:#fff;
padding: 20px 0px;
font-weight: 500;
color:#1E90FF;
position: absolute;
top: 61px;

left: -94px;
    padding-left: 5px;
    width: 250px;
    height: 170px;

/* width: 100%; */
/* .sub-navbar-container{
    max-width:992px;
    margin:0 auto;
} */

.sub-navbar-menu{
    cursor: pointer;
    padding: 10px 0px;
}

@media screen and (max-width: 768px) {
    top: 57px;
    left: 0px;
    width: 100%; 
    padding: 0px 0px;
}

`