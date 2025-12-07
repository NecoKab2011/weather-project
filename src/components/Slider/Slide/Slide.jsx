import React, { useState } from "react";
import styles from "./Slide.module.scss";

const Slide = ({ images }) => {
 const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  const getIndex = offset => (index + offset + images.length) % images.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.side2} onClick={prev}>
          <img src={images[getIndex(-2)]} alt="" />
        </div>
        <div className={styles.side1} onClick={prev}>
          <img src={images[getIndex(-1)]} alt="" />
        </div>
        <div className={styles.center}>
          <img src={images[getIndex(0)]} alt="" />
        </div>
        <div className={styles.side1} onClick={next}>
          <img src={images[getIndex(1)]} alt="" />
        </div>
        <div className={styles.side2} onClick={next}>
          <img src={images[getIndex(2)]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
