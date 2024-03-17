import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Card from "../components/Card";
import styles from "./SearchPage.module.css";
import Loader from "../components/Loader";

import { useProducts } from "../context/ProductContext";
import { useLocation } from "react-router-dom";
function SearchPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [filter, setFilter] = useState({});
  const location = useLocation();
  const state = location.state.query;
  console.log(state);

  useEffect(() => {
    setDisplayed((displayed) => products);
  }, []);
  return (
    <div className={styles.containerOrginal}>
      <Navbar />
      <div className={styles.lastCProducts}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>جدیدترین محصولات</h1>
        </div>
        <div className={styles.container}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <p>lklklkl</p>
      </div>
    </div>
  );
}

export default SearchPage;
