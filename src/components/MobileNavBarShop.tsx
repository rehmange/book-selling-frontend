import styled from 'styled-components';
import { Row, Col } from 'antd'
import { CaretLeftOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'

const MobileNavBarShop = ({ setMobileShop, setSubNavbar }: any) => {
    const closeNavBar = () => {
        setMobileShop(false);
        setSubNavbar(false)
    }
    return (
        <MobileNavBarShopStyled>
            <Row>
                <Col onClick={() => { setMobileShop(false); setSubNavbar(true) }}>
                    <CaretLeftOutlined /> Shop
                </Col>
            </Row>
            <Row gutter={[15, 15]} style={{ marginLeft: "0px", marginRight: "0px" }} className='mobile-nav-product'>
                <Col xs={24} onClick={closeNavBar}><Link to='/books'>Books</Link></Col>
                <Col xs={24}>Merchandise</Col>
            </Row>
        </MobileNavBarShopStyled>
    )
}

export default MobileNavBarShop


const MobileNavBarShopStyled = styled.div`
position: absolute;
width: 100%;
border-top:black 1px solid ;
    box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    height: 170px;
    background-color: #fff;
    line-height: normal;
    padding: 8px 10px;
    font-weight: 500;
    color:#1E90FF;
    .mobile-nav-product{
        padding: 8px 20px;
    }
`