import React from "react";
import "./style.css";
import { PageHeader } from "antd";

const Header = () => {
  return (
    <PageHeader
      className="page-header"
      backIcon={false}
      onBack={() => null}
      title="Page Header"
    />
  );
};

export default Header;
