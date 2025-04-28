import React from "react";
import styles from "./Card.module.css";

const Card = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div className={`${styles.card} ${className}`} ref={ref} {...props}>
      {children}
    </div>
  );
});

export default Card;
