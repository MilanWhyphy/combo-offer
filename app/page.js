"use client";

import React, { useState } from "react";
import Items from "@/src/lib/items.json";

import styles from "./page.module.css";
import { toast } from "sonner";
import Card from "@/src/components/ui/Card/Card";
import { Checkbox, Typography } from "antd";

export default function ComboOfferPage() {
  // Items are list of items with id, name and price
  // we need to make left side list of items and
  // right side 2 input fields one for 'Customer can buy' and once for 'Combo Price'
  // bottom of this 2 fields we need to show items that are selected from left side list
  // remember from left side once item is selected and user again click then show them item is already selected
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

              <div className={styles.productList}>
                {Products.map((product) => (
                  <div
                    key={product.id + Date.now()}
                    className={styles.produtWrapper}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(product);
                    }}
                  >
                    <div className={styles.productInner}>
                      <Checkbox
                        checked={selectedItems.some((i) => i.id === product.id)}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleItemClick(product);
                        }}
                      >
                        {product.name}
                      </Checkbox>
                    </div>
                  </div>
                ))}
              </div>
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
