import { Row } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Browse = () => {
    return (
        <BrowseStyled>
            <Row className='browse-by'>Browse By:</Row>
            <Row className='dots'>---------------------------------</Row>
            <Row className='browse-by-item'><Link to='/books'>All Book</Link></Row>
            <Row className='browse-by-item'>All Merch</Row>
        </BrowseStyled>
    )
}

export default Browse

const BrowseStyled = styled.div`
position:sticky;
top: 105px;

.browse-by{
    font-size: 15px;
    font-weight: 600;
    color:#9d129d;
}
.dots{
    font-size: 15px;
    font-weight: 900;
    color:#9d129d;
}
.browse-by-item{
    font-size: 15px;
    font-weight: 700;
    color:#9d129d;
}

@media screen and (max-width: 768px) {
    padding-left: 15px;
  }

`
