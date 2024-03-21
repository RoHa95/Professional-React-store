import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetailse } from "../context/ProductContext";
import Loader from "../components/Loader";

import styles from "./ProductDetailes.module.css";

function ProductDetails() {
  const {id} = useParams();

  const productDetails = useProductDetailse(+id);
  console.log(productDetails);
  if(!productDetails) return <Loader/>
  return <div className={styles.container}>
    <img src={productDetails.image} alt="productImage" />
    <div className={styles.left}>
      <h3>{productDetails.title}</h3>
      <p>{productDetails.description}</p>
      <div className={styles.buttonContainer}>
        <span>{productDetails.price} $ </span>
        <span>{productDetails.category}</span>
      </div>
    </div>
  </div>;
}

export default ProductDetails;
