import React from "react";
import { useProducts } from "../context/ProductContext";
import Navbar from "../components/Navbar";

import styles from "./HomePage.module.css";
import Banners from "../components/Banners";
import LastProducts from "../components/LastProducts";
import ProposeProduct from "../components/ProposeProduct";
import BrandsLogo from "../components/BrandsLogo";
import Footer from "../components/Footer";

function HomePage() {
  const products = useProducts();
  console.log(products);
  return (
    <>
      <Navbar />
      <Banners/>
      <div className={styles.proposView}>
        <div className={styles.container}>
          <LastProducts />
        </div>
        <div className={styles.proposeContainer}>
          <ProposeProduct />
        </div>
      </div>
      <BrandsLogo/>
      <Footer/>
    </>
  );
}

export default HomePage;
