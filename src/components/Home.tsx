import styled from 'styled-components'
import { background } from '~/components/globalImges'
const Home = () => {
    return (
        <HomeStyled >
            <img src={background} alt='background' className='homeImage' />
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.div`
height: calc(100vh - 207px);
.homeImage{
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px) {
    height: calc(100vh - 124px);
  }

`
