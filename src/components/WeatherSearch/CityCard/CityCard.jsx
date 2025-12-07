import { useWeather } from "../../context/WeatherContext";
import { useEffect, useMemo, useState } from "react";

import refreshicon from "../../../images/WeatherCard/refresh.png";
import hearticon from "../../../images/WeatherCard/heart.png";
import deleteicon from "../../../images/WeatherCard/delete.png";

import styles from "./CityCard.module.scss";

export const CityCard = ({
  city,
  onLike,
  onDelete,
  onRefresh,
  onMore,
  onHourly,
  onWeekly,
}) => {
  const [localClock, setLocalClock] = useState("");

  const makeLocalTime = () => {
    if (!city?.timezone) return "";

    const baseMs = (city.dt ?? Date.now() / 1000) * 1000;
    const localMs = baseMs + city.timezone * 1000;

    return new Date(localMs).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });
  };

  useEffect(() => {
    setLocalClock(makeLocalTime());
    const t = setInterval(() => setLocalClock(makeLocalTime()), 60000);
    return () => clearInterval(t);
  }, [city.dt, city.timezone]);

  const formattedDate = useMemo(() => {
    const d = new Date((city.dt ?? Date.now() / 1000) * 1000);
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const weekday = d.toLocaleString("en-US", { weekday: "long" });
    return `${day}.${month}.${year} ${weekday}`;
  }, [city.dt]);

  return (
    <div className={styles.card}>
      <div className={styles.card__location}>
        <p className={styles.card__city}>{city.name}</p>
        <p className={styles.card__country}>{city.country}</p>
      </div>

      <div className={styles.card__time}>{localClock}</div>

      <div className={styles.card__forecasts}>
        <button
          className={styles.card__forecastbtn}
          onClick={() => onHourly(city)}
        >
          Hourly forecast
        </button>

        <button
          className={styles.card__forecastbtn}
          onClick={() => onWeekly(city)}
        >
          Weekly forecast
        </button>
      </div>

      <div className={styles.card__date}>
        <p className={styles.card__currentdate}>{formattedDate}</p>
      </div>

      <div className={styles.card__weatherimage}>
        <img
          className={styles.card__weathericon}
          src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
          alt={city.weather}
        />
      </div>

      <div className={styles.card__temp}>
        <p className={styles.card__tempvalue}>{Math.round(city.temp)}°</p>
      </div>

      <div className={styles.card__bottom}>
        <div className={styles.card__actions}>
          <img
            className={styles.card__bottomicon}
            src={refreshicon}
            onClick={() => onRefresh(city)}
          />

          <img
            className={styles.card__bottomicon}
            src={hearticon}
            onClick={() => onLike(city)}
          />
        </div>

        <button className={styles.card__bottombtn} onClick={() => onMore(city)}>
          See more
        </button>

        <img
          className={styles.card__bottomicon}
          src={deleteicon}
          onClick={() => onDelete(city.id)}
        />
      </div>
    </div>
  );
};
