"use client";

import React, { useState } from "react";
import Items from "@/src/lib/items.json";

import styles from "./page.module.css";
import Card from "@/src/components/ui/Card/Card";
import { Typography } from "antd";
import ProductList from "@/src/components/Products/ProductList";

export default function ComboOfferPage() {
  const Products = Items.map((item) => item);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    // if item is already selected then remove it from selected items
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
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
              <div className={styles.inputContainer}>
                <input type="number" placeholder="Customer can buy" />
                <input type="number" placeholder="Combo Price" />
              </div>
              <div className={styles.selectedItems}>
                {selectedItems.map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
