import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LineChartOutlined, TableOutlined, FundOutlined, HomeOutlined,InsertRowAboveOutlined } from "@ant-design/icons";
const { Sider } = Layout;

function Navigation() {
  const [selected, setSelected] = useState(["1"])
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false)
  const menuItems = [
    { key: "1", to: "/", icon: <HomeOutlined />, label: "Home" },
    { key: "2", to: "/graph", icon: <LineChartOutlined />, label: "Graph" },
    { key: "3", to: "/table-rate", icon: <TableOutlined />, label: "Table" },
    { key: "4", to: "/search-date", icon: <FundOutlined />, label: "Forecast" },
    { key: "5", to: "/multi-matrix", icon: <InsertRowAboveOutlined />, label: "Multiply matrix" },
  ]
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    let selectedItem = menuItems.find((item) => item.to === location.pathname)
    setSelected([selectedItem?.key])
  }, [location]);

  return (
    <>
      <Sider dir="ltr" theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu defaultSelectedKeys={["1"]} selectedKeys={selected}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}><Link to={item.to}>{item.label}</Link></Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
