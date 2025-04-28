"use client";

import React, { useState } from "react";
import Items from "@/src/lib/items.json";

import { Typography } from "antd";

import Card from "@/src/components/ui/Card/Card";
import Button from "@/src/components/ui/Button/Button";
import ProductList from "@/src/components/Products/ProductList";
import CreateCombo from "@/src/components/CreateCombo/CreateCombo";

import styles from "./page.module.css";

export default function ComboOfferPage() {
  const Products = Items.map((item) => item);
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerCanBuy, setCustomerCanBuy] = useState(0);
  const [comboPrice, setComboPrice] = useState(0);

  const handleItemClick = (item) => {
    // if item is already selected then remove it from selected items
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
  };

  // create common function (using e.target.name) set state
  const handleInputChange = (e) => {
    if (e.target.name === "customerCanBuy") {
      setCustomerCanBuy(+e.target.value);
    } else if (e.target.name === "comboPrice") {
      setComboPrice(+e.target.value);
    }
  };

  const handleSave = () => {
    localStorage.setItem(
      "comboOffer",
      JSON.stringify({
        selectedItems,
        customerCanBuy,
        comboPrice,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.left}>
              <Typography className={styles.title}>All Products</Typography>

              <ProductList
                products={Products}
                selectedItems={selectedItems}
                handleItemClick={handleItemClick}
              />
            </div>
            <div className={styles.right}>
              <CreateCombo
                customerCanBuy={customerCanBuy}
                comboPrice={comboPrice}
                handleInputChange={handleInputChange}
                selectedItems={selectedItems}
                handleRemoveItem={handleRemoveItem}
              />

              <div className={styles.btnWrapper}>
                <Button
                  type="primary"
                  label="Save"
                  className={styles.btnSave}
                  disabled={selectedItems.length === 0}
                  onClick={handleSave}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
