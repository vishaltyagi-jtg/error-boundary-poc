import React from "react";
import { images } from "../../assets";
import "./style.css";
import { Layout, Button } from "antd";
import { RedoOutlined } from "@ant-design/icons";

const { Content } = Layout;

interface Props {
  message?: string;
}

function Fallback(props: Props) {
  const defaultMessage = "Something Went wrong. Please try again later";
  const { message = defaultMessage } = props;

  const handleButtonClick = () => {
    window.location.reload();
  };

  return (
    <Layout className="center fallback-wrapper">
      <div className="error-image">
        <img src={images.error} />
      </div>
      <Content>
        <div className="center">
          <h1 className="error-title">{message}</h1>
          <Button
            type="primary"
            icon={<RedoOutlined />}
            onClick={handleButtonClick}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Fallback;
