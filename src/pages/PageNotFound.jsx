import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <p className={styles.notfoundTag}>صفحه مورد نظر شما یافت نشد.</p>
        <img
          className={styles.imageContainer}
          src="https://s31.picofile.com/file/8473836826/p.png"
        ></img>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
