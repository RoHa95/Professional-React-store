import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Card from "../components/Card";
import styles from "./SearchPage.module.css";
import Loader from "../components/Loader";

import { useProducts } from "../context/ProductContext";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
function SearchPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [filter, setFilter] = useState({});
  const location = useLocation();
  const [show, setShow] = useState(true);
  let notFound = useRef(false);
  const state = location.state.query.current;
  console.log(state);

  useEffect(() => {
    setDisplayed((displayed) => products);
  }, []);
  useEffect(() => {
    const result = searchProducts();
    const finalResult = categoryProducts(result);
    setDisplayed((displayed) => finalResult);
    if (result.length === 0) {
      setShow((show) => !show);
    } else {
      setShow((show) => true);
    }
  }, [state]);
  const searchProducts = () => {
    console.log(state);
    if (!state.search) return products;
    const result = products.filter((p) =>
      p.title.trim().toLowerCase().includes(state.search)
    );

    return result;
  };
  const categoryProducts = (products)=>{
    if(!state.category) return products;
    const result = products.filter(p=> p.category === state.category);
    return result

  }
  return (
    <div className={styles.containerOrginal}>
      <Navbar />
      <div className={styles.lastCProducts}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>جدیدترین محصولات</h1>
        </div>
        <div className={styles.container}>
          {!displayed.length && show && <Loader />}
          {!show && <p>not found!!!</p>}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <p>lklklkl</p>
      </div>
    </div>
  );
}

export default SearchPage;
