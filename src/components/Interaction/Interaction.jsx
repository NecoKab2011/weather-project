import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import styles from "./Interaction.module.scss";

const API_URL = "https://gnews.io/api/v4/search?q=animals OR pets&lang=en&apikey=e9ad307d5820024d93cce1f8f7bde64d";

const Interaction = () => {
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const tablet = window.matchMedia("(min-width: 830px)");

    const handleChange = () => {
      setVisible(tablet.matches ? 4 : 2);
    };

    handleChange();
    tablet.addEventListener("change", handleChange);

    return () => tablet.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const r = await axios.get(API_URL);
        setArticles(r.data.articles);
      } catch (error) {
        console.error("Error loading news", error);
      }
    };

    loadArticles();
  }, []);

  const loadMore = () => setVisible((prev) => prev + 4);

  return (
    <section className={styles.interaction__sec}>
      <Container>
        <div className={styles.interaction__box}>
          <h1 className={styles.interaction__title}>Interacting with our pets</h1>

          <div className={styles.interaction__list}>
            {articles.slice(0, visible).map((item, i) => (
              <div className={styles.interaction__item} key={i}>
                <img
                  className={styles.interaction__img}
                  src={item.image}
                  alt={item.title}
                />
                <h3 className={styles.interaction__description}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {visible < articles.length && (
            <button className={styles.interaction__btn} onClick={loadMore}>
              See more
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Interaction;
