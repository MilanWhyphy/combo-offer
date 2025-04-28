import React from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

import { ProductOutlined } from "@ant-design/icons";
import styles from "./sidebar.module.css";

const { Sider } = Layout;

const Sidebar = () => {
  const sideMenuItem1 = [
    {
      label: "Combo Offer",
      icon: <Icon component={ProductOutlined} />,
      link: "/",
      permissions: [],
    },
  ].map((item, index) => {
    return {
      key: `${item.label}`,
      icon: item.icon,
      //
      label: (
        <Link
          style={{
            fontSize: "14px",
            fontWeight: "400",
          }}
          href={item.link}
        >
          {item.label}
        </Link>
      ),
    };
  });

  return (
    <>
      <Sider width={240} theme="light" className={styles.sider}>
        <div
          className={styles.siderContainer}
          style={{
            width: "239px",
          }}
        >
          <div className={styles.menuItem1}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["Combo Offer"]}
              // selectedKeys={[selectedMenuKey]}
              className={styles.menuUl}
              items={sideMenuItem1}
            />
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
