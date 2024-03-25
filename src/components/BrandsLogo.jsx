import styles from "./BrandsLogo.module.css";
import React from "react";

function BrandsLogo() {
  return (
    <div className={styles.container}>
      <h1>برندهای محبوب</h1>
      <div className={styles.brandContainer}>
        <div className={styles.itemContainer}>
          <img
            src="https://s30.picofile.com/file/8473807668/brand8.png"
            alt="brand1"
          />
        </div>
        <div className={styles.itemContainer}>
          <img
            src="https://s30.picofile.com/file/8473808000/brand9.jpg"
            alt="brand1"
          />
        </div>
        <div className={styles.itemContainer}>
          <img
            src="https://s30.picofile.com/file/8473807668/brand8.png"
            alt="brand1"
          />
        </div>
        <div className={styles.itemContainer}>
          <img
            src="https://s31.picofile.com/file/8473808050/brand10.png"
            alt="brand1"
          />
        </div>
        <div className={styles.itemContainer}>
          <img
            src="https://s30.picofile.com/file/8473808000/brand9.jpg"
            alt="brand1"
          />
        </div>
      </div>
    </div>
  );
}

export default BrandsLogo;
