
import styled from 'styled-components'
import { email } from './globalImges'
import { Button } from 'antd'
import EmailCapture from './EmailCapture'
import { useState } from 'react'
const EmailBottom = () => {
    const [open, setOpen] = useState(false)
    return (<>
        <EmailCapture open={open} setOpen={setOpen}/>
        <EmailBottomStyled>
            <div className="email-icon">
                <img src={email} className='email-pic' alt="Email Icon" />
                <span className="icon-text">Exclusive Offers & News</span>
                <span className="icon-text-signup">SIGN UP TODAY!</span>
                <Button className='signUpBtn-email' onClick={() => setOpen(!open)} >
                    Sign Up
                </Button>
            </div>
        </EmailBottomStyled>
    </>
    )
}

export default EmailBottom

const EmailBottomStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 104px;
background-color: #272076;
position: static;

.email-pic{
    height: 98px;
    width: 123px;
}

.email-icon {
    padding-top: 25px;
    position: relative;
    display: inline-block;
}

.icon-text {
    font-family: cursive;
    font-size: 12px;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 500;
    color: #fff;
    width: max-content;
    position: absolute;
    bottom: 96px;
    left: 50%;
    transform: translateX(-50%);
}

.icon-text-signup{
    font-family: cursive;
    font-size: 17px;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 800;
    color: #fff;
    width: max-content;
    position: absolute;
    bottom: 59px;
    left: 50%;
    transform: translateX(-50%);
  
}

.signUpBtn-email {

    position: absolute;
  bottom: 17px; 
  left: 50%;
  transform: translateX(-50%);

    background: linear-gradient(to right, #04A0DB, #FF00FF);
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
.signUpBtn-email:hover{
    background: linear-gradient(to right, #FF00FF, #04A0DB) !important;
    font-weight: 600;
    color:#fff !important;
}

`
