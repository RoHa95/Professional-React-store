import React from "react";
import styles from "./ContactUs.module.css"


import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className={styles.aboutus}>
        <div className={styles.container}>
          <p>
            آدرس: اصفهان، جاده اصفهان شیراز
            <br />
            شماره تماس ثابـــت:0000000000
            <br />
            شماره تماس همراه: 0000000000
            <br />
            ساعات پاسخگویی فروشگاه می ایران، روزهای کاری از ساعت ۱۰ الی ۲۰
            میباشد.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
