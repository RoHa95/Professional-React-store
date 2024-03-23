import React from "react";
import { productQuantity, shortTitle } from "../helper/helper";

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Card.module.css";
import { useCard } from "../context/CardContext";

function Card({ data }) {
  const { id, title, image, description, category, price, rating } = data;
  const newTitle = shortTitle(title);
  const rate = rating.rate;

  const starRender = (rate) => {
    const foolStar = Math.trunc(rate);
    let resultFull = [];
    let resultHalf = [];
    if (Number.isInteger(rate)) {
      // console.log(rate);
      const empety = 5 - rate;
      // console.log(empety);
      for (let i = 0; i < rate; i++) {
        // console.log("0");
        resultFull.push(0);
      }
      for (let i = 0; i < empety; i++) {
        // console.log("1");
        resultHalf.push(0);
      }
    } else {
      // console.log(rate);
      const empety = 5 - rate;

      for (let i = 1; i < rate + 1; i++) {
        //  console.log("0");
        resultFull.push(0);
      }
      for (let i = 1; i < empety; i++) {
        //  console.log("1");
        resultHalf.push(0);
      }
    }
    return { resultFull, resultHalf };
  };

  const stars = starRender(rate);

  const [state, dispatch] = useCard();

  const quantity = productQuantity(state, id);
  console.log(quantity);
  console.log(state);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.linkContainer} to={`/products/${id}`}>
        <img className={styles.cardImage} src={image} />
        <h2 className={styles.cardTitle}>{newTitle}</h2>
        <p className={styles.cardPrice}>{price} $ </p>
        <div className={styles.starContainer}>
          {stars.resultFull.map((s) => (
            <FaStar />
          ))}
          {stars.resultHalf.map((s) => (
            <CiStar />
          ))}
        </div>
      </Link>
      <div className={styles.btnContainer}>
      {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdDeleteOutline />
          </button>
        )}
         {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE")}>-</button>
        )}
        {!!quantity && <span>{quantity}</span> }
        
        {quantity === 0 ? (
          <div
            onClick={() => clickHandler("ADD_ITEM")}
            className={styles.addBtn}
          >
            افزودن به سبد خرید
          </div>
        ) : (
          <button onClick={() => clickHandler("INCREASE")}>+</button>
        )}
       
        
       
      </div>
    </div>
  );
}

export default Card;
