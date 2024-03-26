import styles from "./Footer.module.css";

import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.topContainer}>
        <ul>
          <li>راهنمای خرید</li>
          <li>نحوه ثبت سفارش</li>
          <li>نحوه ارسال سفارش</li>
          <li>شیوه های پرداخت</li>
        </ul>
        <ul>
          <li>خدمات مشتریان</li>
          <li>پاسخ به پرسش های متداول</li>
          <li>شرایط استفاده </li>
          <li>حریم خصوصی </li>
        </ul>
        <ul>
          <li>فروشگاه ما </li>
          <li> اتاق خبر </li>
          <li>فروشنده ما شو </li>
          <li>درباره ما </li>
        </ul>
        <div className={styles.socialContainer}>
          <h3>ما را در شبکه های اجتماعی دنبال کنید.</h3>
          <div className={styles.socialIconContainer}>
            <SlSocialFacebook />
            <SlSocialInstagram />
            <SlSocialLinkedin />
            <SlSocialTwitter />
          </div>
        </div>
      </div>
      <div className={styles.footerDescription}>
        <h3>متفاوت بودن گران نیست.</h3>
        <p>فروشگاه شما </p>
        <p>ساخته شده توسط ROHA </p>
      </div>
    </footer>
  );
}

export default Footer;
