import { Container } from "../Container/Container";
import logo from "../../images/Header/logo.png"
import user from "../../images/Header/user.png"
import styles from "../Header/Header.module.scss"

export default function Header() {
    return (
    <header>
        <Container >
        <div className={styles.header__box}>
            <a className={styles.header__logo} href="">
                <img src={logo} alt="" />
            </a>
        <ul className={styles.header__list}>
            <li className={styles.header__item}>Who we are</li>
            <li className={styles.header__item}>Contacts</li>
            <li className={styles.header__item}>Menu</li>
        </ul>
        <button className={styles.header__btn}>Sign Up</button>
        <a className={styles.header__user} href="">
            <img src={user} alt="" />
        </a>
        </div>
        </ Container>
    </header>
  );
}