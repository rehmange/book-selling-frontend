import { useState, useEffect } from "react"
import axios from "axios";
import { Modal, ConfigProvider, Row, Col, Form, Input, Button ,message} from 'antd';
import styled from 'styled-components';
import { jellyFish } from "~/components/globalImges";

const EmailCapture = () => {
    const [form] = Form.useForm();

    const [open, setOpen] = useState(false)

    const onFinish = async (e: any) => {
        try {
            await axios.post(`${import.meta.env.VITE_SERVER_URL}/email-capture`, {
                email: e.email
            })
            message.success("Thank you for subscribing!")

        } catch (error) {
            message.error("Internal Server Error!")
            console.log(error,'error')
        }

        setOpen(false)
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleCancel = () => {
        setOpen(false)
    }

    useEffect(() => {
        setOpen(true)
    }, [])
    return (

        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        headerBg: "#ffa9be",
                        contentBg: "#f6bcca",
                        colorText: "var(--app-primary-font-color)",
                        // titleColor: "#02A1DB;",
                        titleFontSize: 20,
                        colorIcon: "#fff"
                    }
                }
            }}
        >
            <Modal open={open} onCancel={handleCancel} footer={null} width={400}>
                <EmailCaptureStyled>
                    <Row style={{ marginTop: "30px" }} justify={"center"}>
                        <span className="email-title">Get started with Jellyfish Press </span>
                    </Row>
                    <Row justify={"center"} style={{ marginTop: "30px" }}>
                        <img src={jellyFish} width={"50%"}></img>
                    </Row>
                    <Row justify={"center"} style={{ marginTop: "30px" }}>
                        <Col className='email-text'>Unlock a world of storytelling! Drop your email to score complimentary audio editions of all our books and enjoy VIP access to our latest releases.</Col>
                    </Row>

                    <Form form={form} name="advanced_search"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="vertical"
                    >
                        <Row justify={"center"} style={{ marginTop: "30px" }}>
                            <Col md={24} xs={24}>
                                <Form.Item
                                    name="email"
                                    style={{ marginBottom: "10px" }}
                                >
                                    <Input type='email' placeholder="Enter Email" />
                                </Form.Item>
                            </Col>
                            <Col md={24} xs={24}>
                                <Form.Item style={{ marginBottom: "0px" }}>
                                    <Button htmlType="submit" className='signUpBtn' style={{ width: "100%" }} >
                                        Sign Up
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </EmailCaptureStyled>
            </Modal>
        </ConfigProvider>

    )
}

export default EmailCapture

const EmailCaptureStyled = styled.div`

.email-title{
    color: #016285;
    font-family: "'Protest Riot', sans-serif";
    font-size: 26px;
    text-shadow: rgb(144, 54, 144) 0px 3px 4px
}

.email-text{
    font-size: 14px;
    font-weight: 800;
    color:#0f4f81;
}
.signUpBtn {
    background: linear-gradient(to right, #04A0DB, #A13BA1);
    border: none;
    color: white;
    // padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
.signUpBtn:hover{
    background: linear-gradient(to right, #A13BA1, #04A0DB) !important;
    font-weight: 600;
    color:#fff !important;
}

`
