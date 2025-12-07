import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { Container } from "../Container/Container";
import { HeroTitle } from "./HeroTitle/HeroTitle";
import { HeroInfo } from "./HeroInfo/HeroInfo";
import search from "../../images/Hero/search.svg";
import styles from "../Hero/Hero.module.scss";

const Hero = () => {
  const [query, setQuery] = useState("");
  const { addCity } = useWeather();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      await addCity(query);
      setQuery("");
    } catch (err) {
      console.log("City not found");
    }
  };

  return (
    <section className={styles.hero__sec}>
      <Container>
        <div className={styles.hero__box}>
          <HeroTitle />
          <HeroInfo />
          <div className={styles.herosearch__box}>
             <form onSubmit={handleSearch} className={styles.herosearch__form}>
          <input
            className={styles.herosearch__input}
            value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search location..."
          ></input>
          <button type="submit" className={styles.herosearch__btn}>
            <svg className={styles.herosearch__icon}>
              <use href={search}></use>
            </svg>
          </button>
        </form>
          </div>
          
        </div>
      </Container>
    </section>
  );
}

export default  Hero;
