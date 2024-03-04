import { Divider, Row } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Browse = () => {
    return (
        <BrowseStyled>
            <Row className='browse-by'>Browse By:</Row>
            <Divider style={{ color: 'white', backgroundColor: "#FF00FF", height: "3px", margin: "10px 0" }} />
            <Row className='browse-by-item'><Link to='/books' className='browse-by-item'>All Books</Link></Row>
            <Row className='browse-by-item'>All Merch</Row>
        </BrowseStyled>
    )
}

export default Browse

const BrowseStyled = styled.div`
position:sticky;
top: 105px;
background: #87cefa;
border-radius: 8px;
max-width: 185px;
padding-left: 5px;
.browse-by{
    font-size: 15px;
    font-weight: 900;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .5px;
    text-stroke-color: #FF00FF;
    padding-left: 5px;
}
.dots{
    font-size: 15px;
    font-weight: 900;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .5px;
    text-stroke-color: #FF00FF;
    padding-left: 5px;
}
.browse-by-item{
    font-size: 15px;
    font-weight: 900;
    color: white;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: 1px; 
    -webkit-text-stroke-color: #FF00FF; 
    text-fill-color: white; 
    text-stroke-width: .5px;
    text-stroke-color: #FF00FF;
    padding-left: 5px;
}

@media screen and (max-width: 768px) {
    max-width: 100%;
    padding-left: 15px;
  }
  .browse-by-item{
    padding-left: 0px;
  }
  .browse-by{
    padding-left: 0px;
  }
`
