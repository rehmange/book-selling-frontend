import { Row } from 'antd'
import styled from 'styled-components'

const NewSell = () => {
    return (
        <NewSellStyled>
            <Row className='new-sell' justify={"center"} align={"middle"}>
                New Book: Jellyfish Press
            </Row>

        </NewSellStyled>

    )
}

export default NewSell

const NewSellStyled = styled.div`
position: sticky;
top: 0px;
z-index: 2;
.new-sell{
    background-color: var(--app-primary-color);
    height:38px;
    color:#fff;
    font-weight: 500;
    font-family: 'Protest Riot';
    font-size: 16px;
}
`