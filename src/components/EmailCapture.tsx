import axios from "axios";
import {
  Modal,
  ConfigProvider,
  Row,
  Col,
  Form,
  Input,
  Button,
  message,
} from "antd";
import styled from "styled-components";
import { logo } from "~/components/globalImges";

const EmailCapture = ({ open, setOpen }: any) => {
  const [form] = Form.useForm();

  const onFinish = async (e: any) => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/email-capture`, {
        email: e.email,
      });
      message.success("Thank you for subscribing!");
    } catch (error) {
      message.error("Internal Server Error!");
      console.log(error, "error");
    }

    setOpen(false);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            headerBg: "#87CEFA",
            contentBg: "#87CEFA",
            colorText: "var(--app-primary-font-color)",
            titleFontSize: 20,
            colorIcon: "#fff",
          },
        },
      }}
    >
      <Modal open={open} onCancel={handleCancel} footer={null} width={400}>
        <EmailCaptureStyled>
          <Row style={{ marginTop: "25px" }} justify={"center"}>
            <span className="email-title">Unlock a world of storytelling!</span>
          </Row>
          <Row justify={"center"} style={{ marginTop: "5px" }}>
            <img src={logo} width={"50%"}></img>
          </Row>
          <Row justify={"center"} style={{ marginTop: "5px" }}>
            <Col className="email-text">
              Drop your email to score complimentary audio editions of all our
              books and enjoy VIP access to our latest releases and news.
            </Col>
          </Row>

          <Form
            form={form}
            name="advanced_search"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Row justify={"center"} style={{ marginTop: "30px" }}>
              <Col md={24} xs={24}>
                <Form.Item name="email" style={{ marginBottom: "10px" }}>
                  <Input type="email" placeholder="Enter Email" />
                </Form.Item>
              </Col>
              <Col md={24} xs={24}>
                <Form.Item style={{ marginBottom: "0px" }}>
                  <Button
                    htmlType="submit"
                    className="signUpBtn"
                    style={{ width: "100%" }}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </EmailCaptureStyled>
      </Modal>
    </ConfigProvider>
  );
};

export default EmailCapture;

const EmailCaptureStyled = styled.div`
  .email-title {
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: white;
    text-stroke-width: 1px;
    text-stroke-color: #ff00ff;
    font-size: 23px;
    font-weight: 800;
  }

  .email-text {
    text-align: center;
    font-size: 17px;
    font-weight: 1000;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
    text-fill-color: white;
    text-stroke-width: 0.5px;
    text-stroke-color: #ff00ff;
  }
  .signUpBtn {
    background: linear-gradient(to right, #04a0db, #ff00ff);
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .signUpBtn:hover {
    background: linear-gradient(to right, #ff00ff, #04a0db) !important;
    font-weight: 600;
    color: #fff !important;
  }

  @media screen and (max-width: 768px) {
    .email-title {
      font-size: 20px;
    }
    .email-text {
      font-size: 18px;
      font-weight: 1000;
      -webkit-text-stroke-width: 0.7px;
      text-stroke-width: 0.7px;
    }
  }
`;
