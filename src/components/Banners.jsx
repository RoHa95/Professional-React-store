import React from "react";
import { useProducts } from "../context/ProductContext";

import styles from "./Banners.module.css";

import ImageSlider from "../helper/imageSlider";
import ImageSliderAuto from "../helper/imageSliderAuto";

const sliderPics = [
  {
    ImageNo: "1/3",
    ImageName: "img_band_ny",
    ImageSrc: "https://s31.picofile.com/file/8473547726/a1.jpg",
  },
  {
    ImageNo: "2/3",
    ImageName: "img_band_ny",
    ImageSrc: "https://s30.picofile.com/file/8473547842/a2.jpg",
  },
  {
    ImageNo: "3/3",
    ImageName: "img_band_ny",
    ImageSrc: "https://s30.picofile.com/file/8473547834/a3.jpg",
  },
];
function Banners() {
  const products = useProducts();
  const start = products.slice(0, 9);

  console.log(start);
  return (
    <div className={styles.container}>
      <div className={styles.ads}>
        <div className={styles.top}>
          <img src="https://s31.picofile.com/file/8473548968/b3.jpg" alt="banner1" />
        </div>
        <div className={styles.button}>
          <img src="https://s31.picofile.com/file/8473548984/b4.jpg" alt="banner2" />
        </div>
      </div>
      <div className={styles.slider}>
        <ImageSliderAuto ImageData={sliderPics} SlideInterValTime={3500} />
        {/* <img src={sliderPics[0]} alt="slide1" />
        <img src={sliderPics[1]} alt="slide2" />
        <img src={sliderPics[2]} alt="slide2" /> */}
      </div>
    </div>
  );
}

export default Banners;
