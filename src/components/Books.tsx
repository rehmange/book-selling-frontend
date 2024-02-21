import styled from 'styled-components'
import { Row, Col } from 'antd'
// import Browse from './Browse'
import { Link } from 'react-router-dom'
const Books = () => {
    return (
        <BooksStyled>
            <Row className='books-Container'>
                {/* <Col xs={24} md={6} style={{ paddingTop: "40px" }}>

                    <Browse />
                </Col>
                <Col xs={24} md={18}>    */}
                {/* <Row > */}

                    <Row className='books-title' justify={"center"} align={"middle"}>
                        Books
                    </Row>
                    <Row style={{ width: '100%', marginLeft: "0px", marginRight: "0px" }} gutter={[{ xs: 0, sm: 0, md: 15, lg: 20 }, 20]} >

                        {/* <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col> */}


                        {/* <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col>


                        <Col md={8} xs={24} className='product-container'>
                            <Link to={`/book/Money-Matters`}>
                                <Row>
                                    <Col span={24} className='productImg'>
                                        <Row justify={"center"} align={"middle"} style={{ height: '100%' }}>
                                            <img src='https://explore.rebelgirls.com/wp-content/uploads/2022/06/Board-Book_Cover-1.png' className='bookImg' />
                                        </Row>
                                    </Col>
                                    <Col span={24} className='book-name'>Money Matters</Col>
                                    <Col span={24} className='book-price'><strong>MSRP</strong>: $12.99 | <strong>Age Range</strong>: 8–12</Col>
                                </Row>
                            </Link>
                        </Col> */}




                    </Row>
                {/* </Row> */}
                {/* </Col> */}
            </Row>

        </BooksStyled>
    )
}

export default Books

const BooksStyled = styled.div`
.books-Container{
    max-width:992px;
    margin:0 auto;
}
.books-title{
padding: 25px 0px;
width: 100% !important;
color:#fafafa;
font-weight: 500;
font-size: 70px;
font-family: 'Protest Riot', sans-serif;
text-shadow: 0px 5px 4px rgb(144 54 144)
}

.productImg{
    background:#fff;
    height: 260px;
}

.book-name{
    margin-top: 5px;
    background: white;
    font-weight: 500;
    color: #ff00ff;
    font-size: 22px;
padding-left:8px;
}

.book-price{
    /* color: #ffffff; */
    background: white;
    color: #ff00ff;
    padding-left:8px ;
}

.bookImg{
    width: 70%;
    transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
.bookImg:hover {
    transform: scale(1.1); /* Example transform on hover */
  }

@media screen and (max-width: 768px) {
    .bookImg{
        width: 40%;
    }
    .book-name{
        padding-left: 8px;
    }
    .book-price{
        padding-left: 8px;
    }
}
@media screen and (max-width: 533px) {
    .bookImg{
        width: 60%;
    }
}
@media screen and (max-width: 417px) {
    .bookImg{
        width: 80%;
    }
}
@media screen and (max-width: 317px) {
    .bookImg{
        width: 90%;
        
    }
}

.product-container{
    cursor: pointer;
}

`
