import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { useProducts } from "../context/ProductContext";

import styles from "./Navbar.module.css";

function Navbar() {
  const product = useProducts();
  const productscategory = product.map((p) => p.category);
  const categories = [...new Set(productscategory)];
  const [search, setSearch] = useState("");

  let query = useRef({ search: "", category: "" });
  let category = useRef("");

  let navigate = useNavigate();

  const searchHandler = () => {
    query.current = { search: search, category: category.current };
    navigate("/search-page", { state: { query } });
  };

  const categoryHandler = (event) => {
    const category1 = event.target.innerText.toLowerCase();

    if (event.target.tagName !== "LI") return;
    if (event.target.innerText === "خانه") return;
    if (event.target.innerText === "همه ی محصولات") {
      category.current = "";
      query.current = { category: category.current, search: search };
      navigate("/search-page", { state: { query } });
    } else {
      category.current = category1;
      query.current = { category: category.current, search: search };
      navigate("/search-page", { state: { query } });
    }
  };

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
              onChange={(e) =>
                setSearch((search) => e.target.value.toLowerCase().trim())
              }
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
          <li className={styles.navListItem} onClick={categoryHandler}>
          همه ی محصولات
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
