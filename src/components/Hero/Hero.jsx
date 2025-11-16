import { Container } from "../Container/Container";
import { HeroTitle } from "./HeroTitle/HeroTitle";
import { HeroInfo } from "./HeroInfo/HeroInfo";
import { HeroSearch } from "./HeroSearch/HeroSearch";
import styles from "../Hero/Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero__sec}>
      <Container>
        <div className={styles.hero__box}>
          <HeroTitle />
          <HeroInfo />
          <HeroSearch />
        </div>
      </Container>
    </section>
  );
}
