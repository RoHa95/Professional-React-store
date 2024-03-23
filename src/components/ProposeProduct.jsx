import React from "react";
import { useProducts } from "../context/ProductContext";
import { shortTitle } from "../helper/helper";
import styles from "./ProposeProduct.module.css";
import Card from "./Card";
const propose = {
  description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER",
  image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  category: "electronics",
  title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker",
  price: 29.95,
  rating: { rate: 2.9, count: 250 },
};
const newTitle = shortTitle(propose.title);
function ProposeProduct() {
  const product = useProducts();
  // const randomIndex = Math.floor(Math.random()*productLength + 1);

  return (
   
      <div className={styles.lastProduct}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>پیشنهاد ویژه  </h1>
        </div>
        <div className={styles.container}>
          <Card data={propose}/>
        </div>
      </div>
     
    
  );
}
export default ProposeProduct;
