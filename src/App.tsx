import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from 'styled-components'
import Navbar from '~/components/Navbar';
import { background } from '~/components/globalImges'


import FooterSite from "./components/FooterSite";
import EmailCapture from "./components/EmailCapture";
import { Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Books = lazy(() => import('./components/Books'));
const Book = lazy(() => import('./components/Book'));
const About = lazy(() => import('./components/About'));
// const EmailBottom = lazy(() => import('./components/EmailBottom'));
const Home = lazy(() => import('./components/Home'));
const NoMatch = lazy(() => import('./components/NoMatch'));
// const Landing = lazy(() => import('./components/Landing'));

function App() {
  const [open, setOpen] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 30000)

  }, [])



  return (
    <AppStyled>
      <EmailCapture open={open} setOpen={setOpen} />
      {/* <NewSell /> */}
      <BrowserRouter>
        <Suspense fallback={<Row style={{ height: "100vh" }} justify={"center"} align={"middle"}><Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "var(--app-primary-color)" }} spin />} /></Row>}>
          <div className='headerContainer'>
            <Navbar />
          </div>
          <div className='content'>
            <Routes>
              <Route>
                <Route path="/">
                  <Route path="/" element={<Home />} />
                  <Route path="books" element={<Books />} />
                  <Route path="book/:id/:title" element={<Book />} />
                  <Route path="about" element={<About />} />
                </Route>
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <div>
            <FooterSite />
          </div>
        </Suspense>
      </BrowserRouter>
    </AppStyled >
  )
}

export default App

const AppStyled = styled.div`
position: relative;
.headerContainer{
  background-color: #fff;
  width: 100%;
  position: sticky;
  top: 0px;
z-index: 2;
}

.content{
  min-height: calc(100vh - 207px);
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}

@media screen and (max-width: 768px) {
  .content{
    min-height: calc(100vh - 124px);
    background-position: left;
}
  }
`