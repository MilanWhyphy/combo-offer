import React from "react";

import { Checkbox } from "antd";

import styles from "./ProductList.module.css";

const ProductList = ({ products, selectedItems, handleItemClick }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
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
  );
};

export default ProductList;
