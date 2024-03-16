import React from "react";
import { useProducts } from "../context/ProductContext";
import Card from "./Card";
import styles from "./LastProducts.module.css";
import Loader from "./Loader";
function LastProducts() {
  const products = useProducts();
  return (
    <div className={styles.lastProduct}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>جدیدترین محصولات</h1>
      </div>
      <div className={styles.container}>
        { !products.length && <Loader/>}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default LastProducts;
