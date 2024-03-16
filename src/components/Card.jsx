import React from "react";
import { shortTitle } from "../helper/helper";

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

import styles from "./Card.module.css";

function Card({ data }) {
  const { title, image, description, category, price, rating } = data;
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
        console.log("0");
        resultFull.push(0);
      }
      for (let i = 0; i < empety; i++) {
        console.log("1");
        resultHalf.push(0);
      }
    } else {
      // console.log(rate);
      const empety = 5 - rate;

      for (let i = 1; i < rate + 1; i++) {
        console.log("0");
        resultFull.push(0);
      }
      for (let i = 1; i < empety; i++) {
        console.log("1");
        resultHalf.push(0);
      }
    }
    return { resultFull, resultHalf };
  };
  const starts = starRender(rate);
  
  console.log(starts.resultFull);
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={image} />
      <h2 className={styles.cardTitle}>{newTitle}</h2>
      <p className={styles.cardPrice}>{price} $ </p>
      <div className={styles.starContainer}>

     {starts.resultFull.map(s=><FaStar/>)}
     {starts.resultHalf.map(s=><CiStar/>)}
      </div>
    </div>
  );
}

export default Card;
