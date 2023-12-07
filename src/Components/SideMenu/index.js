import {
  AppstoreOutlined,
  DiffOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  GlobalOutlined,
  InboxOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Resourses",
            key: "/resourse",
            icon: <DiffOutlined />,
          },
          {
            label: "Insight",
            key: "/insight",
            icon: <InboxOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
