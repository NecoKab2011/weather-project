import { Container } from "../Container/Container";
import { Component } from "react";
import logo from "../../images/Header/logo.png";
import user from "../../images/Header/user.png";
import styles from "../Header/Header.module.scss";

class Header extends Component {
  state = {
    isOpen: false,
    isRegistered: false,
    name: "",
    email: "",
    password: "",
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false,
      isRegistered: true,
      email: "",
      password: "",
    });
  };

  render() {
    const { isOpen, isRegistered, name, email, password } = this.state;

    return (
      <header>
        <Container>
          <div className={styles.header__box}>
            <a className={styles.header__logo} href="">
              <img src={logo} alt="" />
            </a>

            <ul className={styles.header__list}>
              <li className={styles.header__item}>Who we are</li>
              <li className={styles.header__item}>Contacts</li>
              <li className={styles.header__item}>Menu</li>
            </ul>

            {!isRegistered && (
              <button onClick={this.openModal} className={styles.header__btn}>
                Sign Up
              </button>
            )}

            {isRegistered && (
              <a className={styles.header__user} href="">
                <img src={user} alt="" />
                <span className={styles.header__username}>{name}</span>
              </a>
            )}
          </div>

          {isOpen && (
            <div className={styles.modal__backdrop}>
              <div className={styles.modal__box}>
                <h1 className={styles.modal__title}>Sign up</h1>
                <form
                  className={styles.modal__form}
                  onSubmit={this.handleSubmit}
                >
                  <ul className={styles.modal__list}>
                    <li className={styles.modal__item}>
                      <p className={styles.modal__type}>Username</p>
                      <input
                        className={styles.modal__input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        required
                      />
                    </li>

                    <li className={styles.modal__item}>
                      <p className={styles.modal__type}>Password</p>
                      <input
                        className={styles.modal__input}
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
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
  }
}

export default Header;
