import React from "react";
import styles from "./Button.module.css";
import { Button as AntButton } from "antd";

const Button = React.forwardRef(
  ({ label, className, btnWidth, ...props }, ref) => {
    return (
      <AntButton {...props} className={`${styles.btn} ${className}`}>
        {label}
      </AntButton>
    );
  }
);

export default Button;
