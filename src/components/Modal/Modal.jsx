import { Container } from "../Container/Container";
import styles from "./Modal.module.scss";

export default function Modal() {
  return (
    <section className={styles.modal}>
      <Container>
        <div className={styles.modal__box}>
          <h1 className={styles.modal__title}>Sign up</h1>
          <ul className={styles.modal__list}>
            <li className={styles.modal__item}>
              <input type="text" />
            </li>
            <li className={styles.modal__item}>
              <input type="email" />
            </li>
            <li className={styles.modal__item}>
              <input type="text" />
            </li>
          </ul>
        <button className={styles.modal__btn}>Sign up</button>
        <p className={styles.modal__login}>Already have an account? Log In</p>
        </div>
      </Container>
    </section>
  );
}
