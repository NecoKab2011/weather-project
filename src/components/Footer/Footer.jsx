import styles from "./Footer.module.scss"
import logo from "../../images/Header/logo.png";
import insta from '../../images/Footer/insta.png'
import facebook from '../../images/Footer/facebook.png'
import whatsapp from '../../images/Footer/whatsapp.png'
import { Container } from "../Container/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__box}>
          <a className={styles.footer__logo} href="">
            <img src={logo} alt="" />
          </a>
          <div className={styles.footer__addressbox}>
            <h2 className={styles.footer__addresstitle}>Address</h2>
            <p className={styles.footer__addressinfo}>
              Svobody str. 35
              <br />
              Kyiv
              <br />
              Ukraine
            </p>
          </div>

          <div className={styles.footer__socbox}>
            <h2 className={styles.footer__soctitle}>Contact us</h2>
            <div className={styles.footer__socicons}>
              <a href="https://www.instagram.com/" className={styles.footer__instlink}>
                <img 
                className={styles.footer__instimage} 
                src={insta} 
                alt="https://www.instagram.com/"
                ></img>
              </a>
              <a href="https://www.facebook.com/" className={styles.footer__facebooklink}>
                <img
                  className={styles.footer__facebookimage}
                  src={facebook}
                  alt="https://www.facebook.com/"
                ></img>
              </a>
              <a href="https://www.whatsapp.com/" className={styles.footer__whatsapplink}>
                <img
                  className={styles.footer__whatsappimage}
                  src={whatsapp}
                  alt="https://www.whatsapp.com/"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
