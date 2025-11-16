import search from "../../../images/Hero/search.svg"
import styles from "./HeroSearch.module.scss";

export const HeroSearch = () => {
  return (
    <>
      <div className={styles.herosearch__box}>
        <input
          className={styles.herosearch__input}
          placeholder="Search location..."
        ></input>
        <button className={styles.herosearch__btn}>
          <svg className={styles.herosearch__icon}>
            <use href={search}></use>
          </svg>
        </button>
      </div>
    </>
  );
};
