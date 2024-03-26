import React, { useState } from "react";
import { useCard } from "../context/CardContext";
import { Link } from "react-router-dom";
import styles from "./BasketProducts.module.css";
import Navbar from "../components/Navbar";
import { MdDeleteOutline } from "react-icons/md";
import Footer from "../components/Footer";

function BasketProducts() {
  const [state, dispatch] = useCard();

  const clickHandler = (type, data) => {
    dispatch({ type, payload: data });
  };
  const inputHandler = (e) => {
    const index = state.selectedItems.findIndex(
      (p) => p.title === e.target.dataset.id
    );
    state.selectedItems[index].quantity = e.target.value;
    console.log(state.selectedItems[index]);
  };
  console.log(state);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.cartContentContainer}>
            <table>
              <tr>
                <th>محصول</th>
                <th>قیمت</th>
                <th>تعداد</th>
                <th>مجموع</th>
              </tr>
              {state.selectedItems.map((product) => (
                <tr>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        paddingLeft: "10px",
                      }}
                      src={product.image}
                    ></img>
                    <p>{product.title}</p>
                  </td>
                  <td style={{ textAlign: "center", width: "120px" }}>
                    {product.price} $
                  </td>
                  <td style={{ textAlign: "center", width: "120px" }}>
                    {product.quantity === 1 && (
                      <button className={styles.btn} onClick={()=>{clickHandler("REMOVE_ITEM", product)}}>
                        <MdDeleteOutline />
                      </button>
                    )}
                    {product.quantity > 1 && <button className={styles.btn} onClick={()=>{clickHandler("DECREASE", product)}}>-</button>}
                    <span>{product.quantity}</span>
                    <button className={styles.btn} onClick={()=>{clickHandler("INCREASE", product)}}>+</button>
                  </td>
                  <td style={{ textAlign: "center", width: "120px" }}>
                    {product.price * product.quantity} $
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>جمع کل سبد خرید</h2>
            <div className={styles.summaryContent}>
              <p>تعداد اقلام: {state.itemsCounter}</p>
              <p>قیمت کل: {state.total} $ </p>
              <p>
                وضعیت پرداخت:{" "}
                {state.checkout === false ? "تسویه نشده" : "تسویه شده"}
              </p>
              {(state.total !== 0) ? (
                <button
                  className={styles.checkedBtn}
                  onClick={() => clickHandler("CHECKOUT")}
                >
                  اتصال به درگاه پرداخت
                </button> 
              ) : (
                <button className={styles.checkedBtn}>
                  <Link to="/products">ادامه ی خرید</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default BasketProducts;
