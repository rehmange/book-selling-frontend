import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { App as AntdApp } from 'antd';
import { ConfigProvider } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'
import './App.css'
const themeConfig = {
  components: {
    Layout:{
      headerPadding:0,
      headerBg:"#fff",
      footerPadding:0
    }
  },
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ConfigProvider theme={themeConfig}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>

  </React.StrictMode>,
)
