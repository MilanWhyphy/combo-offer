import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import moment from "moment";
import { Typography } from "antd";
import { ProductOutlined } from "@ant-design/icons";

import Icon from "@ant-design/icons/lib/components/Icon";

import EllipseIcon from "@/src/assets/icons/EllipseIcon.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 60000); // Update every minute (60000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.navHeader}>
        <div className={styles.logoDiv}>Whyphy Tech</div>

        <div className={styles.titleDiv}>
          <Typography className={styles.navTitle}>
            Hello, Interviewee 👋
          </Typography>
          <div className={styles.navContent}>
            <Typography className={styles.timeTypo}>
              {currentTime.format("MMMM DD, YYYY")}
            </Typography>
            <Image
              src={EllipseIcon}
              alt="Ellipse"
              className={styles.ellipseImg}
            />
            <Typography className={styles.dateTypo}>
              {currentTime.format("h:mm A")}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
