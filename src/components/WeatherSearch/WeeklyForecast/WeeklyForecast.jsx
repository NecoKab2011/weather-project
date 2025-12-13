import styles from "./WeeklyForecast.module.scss";
import { Container } from "../../Container/Container";

export const WeeklyForecast = ({ daily, timezone }) => {
  if (!daily || daily.length === 0) return null;

  const getDayInfo = (day, index) => {
    const date = new Date((day.dt + timezone) * 1000);

    return {
      formattedDate: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      isToday: index === 0,
    };
  };

  return (
    <section className={styles.weekly}>
      <Container>
        <div className={styles.weekly__wrapper}>
          <h2 className={styles.weekly__title}>8-day forecast</h2>

          <div className={styles.weekly__list}>
            {daily.map((day, index) => {
              const { formattedDate, dayName, isToday } = getDayInfo(
                day,
                index
              );

              return (
                <div key={day.dt} className={styles.weekly__item}>
                  <div className={styles.weekly__date}>
                    <div className={styles.weekly__dayname}>
                      {isToday ? "Today" : dayName},
                    </div>
                    <div className={styles.weekly__fulldate}>
                      {formattedDate.split(", ")[1]}
                    </div>
                  </div>

                  <div className={styles.weekly__temps}>
                    <div className={styles.weekly__subwrap}>
                      <span className={styles.weekly__max}>
                        {Math.round(day.temp.max)}°/
                      </span>
                      <span className={styles.weekly__min}>
                        {Math.round(day.temp.min)}°
                      </span>
                    </div>
                  </div>

                  <div className={styles.weekly__description}>
                    {day.weather.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
