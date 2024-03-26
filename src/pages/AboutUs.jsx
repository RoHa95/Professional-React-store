import React from "react";
import styles from "./AboutUs.module.css";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className={styles.aboutus} >
      <div className={styles.container}>
        <p>
          فروشگاه «می ایران» از سال ۱۳۹۶ فعالیت خود را با هدف ایجاد فروشگاهی
          متفاوت در ارائه محصولات و خدمات شیائومی آغاز کرد و در ادامه با فراگیر
          شدن کسب و کار مجازی اقدام راه اندازی فروشگاه اینترنتی کرد تا خدمات خود
          را در سطح کشور گسترش دهد و نیاز مشتریان را در خرید آسان برطرف نماید.
          <br />
          این مجموعه با استفاده درست از انتقادات و تجارب طی این چندسال توانسته
          محیطی امن و با اطمینان برای خرید مشتریان فراهم کند. شعار ما این است:
          <br />
          متفاوت بودن گران نیست! با ارائه محصول اصلی و با کیفیت همراه با قیمت
          مناسب سعی در تحقق این شعار داریم. منتظر نظرات و پیشنهادات شما هستیم.
          <br />
          مدیریت فروشگاه می ایران

        </p>
      </div>

      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
