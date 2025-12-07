import styles from "./HeroInfo.module.scss";

export const HeroInfo = () => {
  return (
    <>
      <div className={styles.heroinfo__box}>
        <p className={styles.heroinfo__text}>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>
        <div className={styles.heroinfo__line}></div>
        <p className={styles.heroinfo__date}>
          {(() => {
            const date = new Date();
            const month = date.toLocaleString("en-US", { month: "long" });
            const year = date.getFullYear();
            const weekday = date.toLocaleString("en-US", { weekday: "long" });
            const day = date.getDate();

            const getDaySuffix = (n) => {
              if (n % 10 === 1 && n !== 11) return `${n}ˢᵗ`;
              if (n % 10 === 2 && n !== 12) return `${n}ⁿᵈ`;
              if (n % 10 === 3 && n !== 13) return `${n}ʳᵈ`;
              return `${n}ᵗʰ`;
            };

            return `${month} ${year} ${weekday}, ${getDaySuffix(day)}`;
          })()}
        </p>
      </div>
    </>
  );
};
