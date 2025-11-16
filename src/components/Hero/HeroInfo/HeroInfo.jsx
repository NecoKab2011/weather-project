import styles from "./HeroInfo.module.scss"


export const HeroInfo = () => {
    return(
        <>
        <div className={styles.heroinfo__box}>
        <p className={styles.heroinfo__text}>Create your personal list of favorite cities and always be aware of the weather.</p>
        <div className={styles.heroinfo__line}></div>
        <p className={styles.heroinfo__date}>October 2023 Friday, 13th</p>
        </div>
        </>
    )
}