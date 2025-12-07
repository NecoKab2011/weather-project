import { Container } from "../Container/Container.jsx";
import React, { useEffect, useState } from "react";
import Slide from "./Slide/Slide.jsx";
import styles from "./Slider.module.scss";

const API_KEY = "50072628-8f6f62aa1cc293b82b9b384d5";

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=50`
        );

        const data = await response.json();

        const urls = data.hits.map((img) => img.webformatURL);

        setImages(urls);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className={styles.slider}>
      <Container>
        <h1 className={styles.slider__title}>Beautiful nature</h1>

        {images.length === 0 && (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )}

        {images.length > 0 && <Slide images={images} />}
      </Container>
    </section>
  );
};

export default Slider;
