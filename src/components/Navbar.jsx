import React from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

import { useProducts } from "../context/ProductContext";

function Navbar() {
  const product = useProducts();
  const productscategory = product.map((p) => p.category);
  const category = [...new Set(productscategory)];

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
            <input placeholder="search" />
            <button>
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
                  lineHeight:"20px",
                  paddingRight:"1px"
                }}
              >
                5
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottonNavbar}>
        <ul className={styles.navList}>
          {category.map((p) => (
            <li key={p.index} className={styles.navListItem}>
              <a>{p}</a>
            </li>
          ))}
          <li className={styles.navListItem}>
            <a>تماس با ما</a>
          </li>
          <li className={styles.navListItem}>
            <a>درباره ی ما</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
