import styled from 'styled-components';
import { Row, Col } from 'antd'
import { CaretLeftOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'

const MobileNavBarShop = ({ setMobileShop, setSubNavbar }: any) => {
    const closeNavBar = ()=>{
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
            <Row gutter={10} style={{ marginLeft: "0px", marginRight: "0px" }} className='mobile-nav-product'>
                <Col xs={24} onClick={closeNavBar}><Link to='/books'>All Book</Link></Col>
                <Col xs={24}>All Merch</Col>
            </Row>
        </MobileNavBarShopStyled>
    )
}

export default MobileNavBarShop


const MobileNavBarShopStyled = styled.div`
border-top:black 1px solid ;
    box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    height: 200px;
    /* background-color: #9498d9; */
    background-color: #fff;
    line-height: normal;
    padding: 8px 10px;
    font-weight: 500;
    /* color:#fff; */
    color:#1E90FF;
    .mobile-nav-product{
        padding: 8px 20px;
    }
`