import React from "react";

import styles from "./CreateCombo.module.css";
import Input from "../ui/Input/Input";
import Table from "../ui/Table/Table";
import { Button } from "antd";
const CreateCombo = ({
  selectedItems,
  handleRemoveItem,
  customerCanBuy,
  comboPrice,
  handleInputChange,
}) => {
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
      width: 200,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
    },
  ];

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <Input
            type="number"
            label="Customer can buy"
            name="customerCanBuy"
            value={customerCanBuy || null}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type="number"
            label="Combo Price"
            name="comboPrice"
            value={comboPrice || null}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <Table
          columns={columns}
          dataSource={selectedItems.map((item) => ({
            key: item?.id,
            name: item?.name,
            price: item?.price,
            action: (
              <Button onClick={() => handleRemoveItem(item)} type="link" danger>
                Remove
              </Button>
            ),
          }))}
          pagination={false}
          scroll={{ x: "max-content", y: 250 }}
        />
      </div>
    </>
  );
};

export default CreateCombo;
