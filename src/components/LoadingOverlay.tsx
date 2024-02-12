import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";

type Props = {
  loaderSize?: string;
  backgroundColor?: string;
};
export default function LoadingOverlay(props: Props) {
  const { loaderSize = "20px", backgroundColor = "rgba(0, 0, 0, 0.075)" } = props;

  return (
    <LoadingOverlayStyled backgroundColor={backgroundColor}>
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: loaderSize,
              color: "var(--app-primary-color)",
            }}
          />
        }
      />
    </LoadingOverlayStyled>
  );
}

const LoadingOverlayStyled = styled.div<{ backgroundColor?: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "rgba(0, 0, 0, 0.075)")};
  z-index: 2;
`;
