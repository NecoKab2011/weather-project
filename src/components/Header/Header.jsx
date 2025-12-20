import { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { Container } from "../Container/Container";

import logo from "../../images/Header/logo.png";
import user from "../../images/Header/user.png";
import styles from "./Header.module.scss";

const Header = () => {
  const { isRegistered, setIsRegistered } = useWeatherContext();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (setIsRegistered && typeof setIsRegistered === "function") {
      setIsRegistered(true);
    } else {
      console.error("setIsRegistered is not available");
    }
    
    setIsOpen(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <header>
      <Container>
        <div className={styles.header__box}>
          <a className={styles.header__logo} href="/">
            <img src={logo} alt="" />
          </a>

          <ul className={styles.header__list}>
            <li className={styles.header__item}>Who we are</li>
            <li className={styles.header__item}>Contacts</li>
            <li className={styles.header__item}>Menu</li>
          </ul>

          {!isRegistered && (
            <button onClick={openModal} className={styles.header__btn}>
              Sign Up
            </button>
          )}

          {isRegistered && (
            <div className={styles.header__user}>
              <img src={user} alt="" />
              <span className={styles.header__username}>{name}</span>
            </div>
          )}
        </div>

        {isOpen && (
          <div className={styles.modal__backdrop}>
            <div className={styles.modal__box}>
              <h1 className={styles.modal__title}>Sign up</h1>

              <form className={styles.modal__form} onSubmit={handleSubmit}>
                <ul className={styles.modal__list}>
                  <li className={styles.modal__item}>
                    <p className={styles.modal__type}>Username</p>
                    <input
                      className={styles.modal__input}
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </li>

                  <li className={styles.modal__item}>
                    <p className={styles.modal__type}>E-Mail</p>
                    <input
                      className={styles.modal__input}
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </li>

                  <li className={styles.modal__item}>
                    <p className={styles.modal__type}>Password</p>
                    <input
                      className={styles.modal__input}
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      required
                    />
                  </li>
                </ul>

                <button className={styles.modal__btn} type="submit">
                  Sign up
                </button>
              </form>

              <p className={styles.modal__login}>
                Already have an account? Log In
              </p>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;