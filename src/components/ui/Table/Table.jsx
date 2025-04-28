import React from "react";
import { Table as AntTable } from "antd";
import styles from "./Table.module.css";

const Table = React.forwardRef(
  ({ className, transperantHeader, ...props }, ref) => {
    const tableClasses = transperantHeader
      ? `${styles.antTableTransperantHeader} ${className}`
      : `${styles.antTable} ${className}`;

    return <AntTable className={tableClasses} size="middle" {...props} />;
  }
);

export default Table;
