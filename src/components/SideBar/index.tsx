import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import "./style.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [defaultSelectedKey, setSelectedKey] = useState("1");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const pathLength = pathname.length;
    const key = pathname.slice(pathLength - 1, pathLength);
    if (["1", "2", "3"].indexOf(key) > -1) {
      setSelectedKey(key);
    }
  }, []);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuChange = ({ key }: { key: string }) => {
    setSelectedKey(key);
    navigate(`/option${key}`);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <h1 className={`logo ${collapsed ? `logo--collapsed` : ""}`}>SideBar</h1>
      <Menu
        theme="dark"
        mode="inline"
        onSelect={handleMenuChange}
        selectedKeys={[defaultSelectedKey]}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<FileOutlined />}>
          Option 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
