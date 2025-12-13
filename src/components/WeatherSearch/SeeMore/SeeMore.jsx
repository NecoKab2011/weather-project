import styles from "./SeeMore.module.scss";
import temp from "../../../images/SeeMore/temp.png";
import humidity from "../../../images/SeeMore/humidity.png";
import pressure from "../../../images/SeeMore/pressure.png";
import windicon from "../../../images/SeeMore/wind.png";
import visibilityicon from "../../../images/SeeMore/visibility.png";
import { Container } from "../../Container/Container";

export const SeeMore = ({ forecast }) => {
  if (!forecast) return null;

  const current = forecast.current;
  const wind = forecast.wind;
  const visibility = forecast.visibility;

  return (
    <section className={styles.seemore}>
      <Container>
        <div className={styles.seemore__list}>
          <div className={styles.seemore__item}>
            <span className={styles.seemore__itemtitle}>Feels like</span>
            <p className={styles.seemore__itemsubtitle}>
              {Math.round(current.feels_like)}°C
            </p>
            <img
              className={styles.seemore__itemimage}
              src={temp}
              alt="Temperature"
            />
          </div>

          <div className={styles.seemore__item}>
            <div className={styles.seemore__minmax}>
              <div className={styles.seemore__min}>
                <span className={styles.seemore__itemtitle}>Min ℃ </span>
                <span className={styles.seemore__itemsubtitle}>
                  {Math.round(
                    forecast.daily && forecast.daily[0]
                      ? forecast.daily[0].temp.min
                      : current.temp_min || current.temp
                  )}
                  ℃
                </span>
              </div>

              <div className={styles.seemore__max}>
                <span className={styles.seemore__itemtitle}>Max ℃ </span>
                <span className={styles.seemore__itemsubtitle}>
                  {Math.round(
                    forecast.daily && forecast.daily[0]
                      ? forecast.daily[0].temp.max
                      : current.temp_max || current.temp
                  )}
                  ℃
                </span>
              </div>
            </div>
          </div>

          <div className={styles.seemore__item}>
            <span className={styles.seemore__itemtitle}>Humidity</span>
            <p className={styles.seemore__itemsubtitle}>{current.humidity}%</p>
            <img
              className={styles.seemore__itemimage}
              src={humidity}
              alt="Humidity"
            />
          </div>

          <div className={styles.seemore__item}>
            <span className={styles.seemore__itemtitle}>Pressure</span>
            <p className={styles.seemore__itemsubtitle}>
              {current.pressure} hPa
            </p>
            <img
              className={styles.seemore__itemimage}
              src={pressure}
              alt="Pressure"
            />
          </div>

          <div className={styles.seemore__item}>
            <span className={styles.seemore__itemtitle}>Wind speed</span>
            <p className={styles.seemore__itemsubtitle}>
              {wind.speed.toFixed(1)} m/s
            </p>
            <img
              className={styles.seemore__itemimage}
              src={windicon}
              alt="Wind"
            />
          </div>

          <div className={styles.seemore__item}>
            <span className={styles.seemore__itemtitle}>Visibility</span>
            <p className={styles.seemore__itemsubtitle}>
              {(visibility / 1000).toFixed(1)} km
            </p>
            <img
              className={styles.seemore__itemimage}
              src={visibilityicon}
              alt="Visibility"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
