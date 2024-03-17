import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

import { useProducts } from "../context/ProductContext";

function Navbar() {
  const product = useProducts();
  const productscategory = product.map((p) => p.category);
  const categories = [...new Set(productscategory)];
  const [search, setSearch] = useState("");
 // const [category, setCategory] = useState("");
  const [query, setQuery] = useState({});

  let navigate = useNavigate();

 useEffect (()=>{
  navigate("/search-page", {state : {query}});
 },[query])
  const searchHandler = () => {
    setQuery((query) => ({ ...query,search} ));
    
    // navigate("/search-page", {state : {query}});
  };

  const categoryHandler = (event) => {
    const category = event.target.innerText.toLowerCase();

    if (event.target.tagName !== "LI") return;
    //setCategory(category=> category);
    setQuery((query) => ({...query, category}));
    
    // navigate("/search-page", {state : {query}});
  };
console.log(query);
  return (
    <div className={styles.navContainer}>
      <div className={styles.topNavbar}>
        <div className={styles.rightNav}>
          <div className={styles.navLogo}>
            <Link to="/products">
              <img
                src="https://s30.picofile.com/file/8473547926/logo.PNG"
                alt="myshopLogo"
              />
            </Link>
          </div>
          <div className={styles.navSearchBox}>
            <input
              placeholder="search"
              value={search}
              onChange={(e) => setSearch(search => e.target.value.toLowerCase().trim())}
            />
            <button onClick={searchHandler}>
              <IoSearch />
            </button>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.loginBtn}>
            <Link to="/signing">
              <p>ورود / ثبتنام</p>
            </Link>
          </div>
          <div className={styles.navBasketBtn}>
            <Link className={styles.navBasketBtnDetailse} to="/checkout">
              <TiShoppingCart className={styles.basketNavItem} />
              <p
                className={styles.basketNavItem}
                style={{ fontSize: "16px", paddingBottom: "10px" }}
              >
                سبد خرید
              </p>
              <p
                style={{
                  paddingBottom: "8px",
                  backgroundColor: "#63adf1",
                  borderRadius: "50%",
                  color: "#fff",
                  width: "23px",
                  height: "20px",
                  textAlign: "center",
                  lineHeight: "20px",
                  paddingRight: "1px",
                }}
              >
                5
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottonNavbar}>
        <ul className={styles.navList} onClick={categoryHandler}>
          <li className={styles.navListItem}>
            <Link to="/products">خانه</Link>
          </li>
          {categories.map((p) => (
            <li key={p.index} className={styles.navListItem}>
              {p}
            </li>
          ))}
          <li className={styles.navListItem}>
            <Link to="/contact-us">تماس با ما</Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="/about-us">درباره ی ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
