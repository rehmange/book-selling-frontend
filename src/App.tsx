import { lazy, Suspense, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from 'styled-components'

import Navbar from '~/components/Navbar';
import { background } from '~/components/globalImges'


import FooterSite from "./components/FooterSite";
import EmailCapture from "./components/EmailCapture";

const LoadingOverlay = lazy(() => import("./components/LoadingOverlay"));
const Books = lazy(() => import('./components/Books'));
const Book = lazy(() => import('./components/Book'));
const About = lazy(() => import('./components/About'));
// const EmailBottom = lazy(() => import('./components/EmailBottom'));
const Home = lazy(() => import('./components/Home'));
const NoMatch = lazy(() => import('./components/NoMatch'));
// const Landing = lazy(() => import('./components/Landing'));

function App() {
  const [open, setOpen] = useState(true)
  return (
    <AppStyled>
      <EmailCapture open={open} setOpen={setOpen} />
      {/* <NewSell /> */}
      <BrowserRouter>
        <div className='headerContainer'>
          <Navbar />
        </div>
        {/* </Header> */}
        <div className='content'>


          {/* <Content className='content'> */}
          <Suspense fallback={<LoadingOverlay loaderSize="40px" backgroundColor="white" />}>
            {/* <BrowserRouter> */}
            <Routes>
              <Route>
                <Route path="/">
                  <Route path="" element={<Home />} />
                  <Route path="books" element={<Books />} />
                  <Route path="book/:id" element={<Book />} />
                  <Route path="about" element={<About />} />
                </Route>
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
            {/* </BrowserRouter> */}
          </Suspense>
        </div>
        {/* </Content> */}
        {/* <Footer > */}
        <div>
          {/* <EmailBottom /> */}
          <FooterSite />
        </div>
        {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        {/* </Footer> */}
        {/* </Layout> */}
      </BrowserRouter>
    </AppStyled>
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
/* position: fixed; */
z-index: 2;
}

.content{
  min-height: calc(100vh - 290px);
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}

@media screen and (max-width: 768px) {
  .content{
    min-height: calc(100vh - 124px);
}
  }




`