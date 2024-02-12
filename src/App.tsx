import { lazy, Suspense } from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import styled from 'styled-components'

import { Layout } from 'antd';

import NewSell from '~/components/NewSell'
import Navbar from '~/components/Navbar';



import FooterSite from "./components/FooterSite";
import EmailCapture from "./components/EmailCapture";

const { Header, Content, Footer } = Layout;
const LoadingOverlay = lazy(() => import("./components/LoadingOverlay"));
const Books = lazy(() => import('./components/Books'));
const Book = lazy(() => import('./components/Book'));
const About = lazy(() => import('./components/About'));
const NoMatch = lazy(() => import('./components/NoMatch'));

function App() {

  return (
    <AppStyled>
      <EmailCapture/>
      <NewSell />
      <BrowserRouter>
        <Layout>
          <Header className='headerContainer'>
            {/* <BrowserRouter> */}
            <Navbar />
            {/* </BrowserRouter> */}
          </Header>
          <Content className='content'>
            <Suspense fallback={<LoadingOverlay loaderSize="40px" backgroundColor="white" />}>
              {/* <BrowserRouter> */}
              <Routes>
                <Route>
                  <Route path="/">
                    <Route path="books" element={<Books />} />
                    <Route path="book/:id" element={<Book />} />
                    <Route path="about" element={<About />} />
                  </Route>
                </Route>
                <Route path="*" element={<NoMatch />} />
              </Routes>
              {/* </BrowserRouter> */}
            </Suspense>
          </Content>
          <Footer >
            <FooterSite />
            {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
          </Footer>
        </Layout>
      </BrowserRouter>
    </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
position: relative;
.headerContainer{
position: sticky;
top: 38px;
z-index: 2;
}

.content{
  min-height:calc(100vh - 38px - 126px);
  background-color: #fff;
}

`