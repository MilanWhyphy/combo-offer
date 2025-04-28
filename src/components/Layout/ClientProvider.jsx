"use client";

import React, { useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

//

import styles from "./Layout.module.css";

const { Content } = Layout;

export default function ClientProvider({ children }) {
  return (
    <AntdRegistry>
      <Layout style={{ minHeight: "100vh" }}>
        <div className={styles.navHeaderDiv}>
          <Navbar />
        </div>

        <Layout>
          <div className={styles.bottomBody}>
            <Sidebar />
            <Layout>
              <Content className={styles.rightPanelLayout}>{children}</Content>
            </Layout>
          </div>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
}
