import { Container } from "../Container/Container";
import styles from "./Modal.module.scss";

export default function Modal({ name, email, password, handleChange, handleSubmit, closeModal }) {
  return (
    <section className={styles.modal}>
      <Container>
        <div className={styles.modal__box}>
          <h1 className={styles.modal__title}>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <ul className={styles.modal__list}>
              <li className={styles.modal__item}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </li>
              <li className={styles.modal__item}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="E-Mail"
                  required
                />
              </li>
              <li className={styles.modal__item}>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </li>
            </ul>
            <button type="submit" className={styles.modal__btn} onClick={closeModal}>
              Sign up
            </button>
          </form>
          <p className={styles.modal__login}>Already have an account? Log In</p>
        </div>
      </Container>
    </section>
  );
}
