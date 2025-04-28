import React from "react";

import { Checkbox } from "antd";

import styles from "./ProductList.module.css";

const ProductList = ({
  isMenuItems = false,
  products,
  selectedItems,
  handleItemClick,
  handleAddToCart,
}) => {
  return (
    <div className={styles.productList}>
      {products.map((product) =>
        isMenuItems ? (
          <div
            key={product.id + Date.now()}
            className={styles.produtWrapper}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
          >
            <div className={styles.productInner}>{product?.name}</div>
          </div>
        ) : (
          <div
            key={product.id + Date.now()}
            className={styles.produtWrapper}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
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
        )
      )}
    </div>
  );
};

export default ProductList;
