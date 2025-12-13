import { Container } from "../Container/Container";
import { CityCard } from "./CityCard/CityCard";
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { WeeklyForecast } from "./WeeklyForecast/WeeklyForecast";
import { SeeMore } from "./SeeMore/SeeMore";
import { useState, useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { useWeather } from "../hooks/useWeather";
import { weatherAPI } from "../../api/weather";

import styles from "./WeatherSearch.module.scss";

const WeatherSearch = () => {
  const { localRecents, refreshAllRecents } = useWeatherContext();
  const { refreshCity, removeCity } = useWeather();

  const [activeSection, setActiveSection] = useState({
    city: null,
    forecast: null,
    type: null,
  });

  const items = localRecents ?? [];

  const loadForecast = async (city, type) => {
    try {
      const forecast = await weatherAPI.getDetailedForecast(city);
      setActiveSection({ city, forecast, type });
    } catch (err) {
      console.error(err);
      alert("Не вдалося завантажити прогноз");
    }
  };

  const toggleSection = (city, type) => {
    if (activeSection.city?.id === city.id && activeSection.type === type) {
      setActiveSection({ city: null, forecast: null, type: null });
      return;
    }

    loadForecast(city, type);
  };

  useEffect(() => {
    if (items.length) refreshAllRecents();
  }, []);

  return (
    <section className={styles.cards}>
      <Container>
        <div className={styles.cardsbox}>
          {items.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              onLike={() => {}}
              onDelete={() => removeCity(city.id)}
              onRefresh={() => refreshCity(city)}
              onMore={() => toggleSection(city, "more")}
              onHourly={() => toggleSection(city, "hourly")}
              onWeekly={() => toggleSection(city, "weekly")}
            />
          ))}
        </div>

        {activeSection.type === "more" &&
          activeSection.forecast && (
            <SeeMore
              city={activeSection.city}
              forecast={activeSection.forecast}
            />
          )}

        {activeSection.type === "weekly" &&
          activeSection.forecast &&
          activeSection.forecast.daily && (
            <WeeklyForecast
              daily={activeSection.forecast.daily.slice(0, 8)}
              timezone={activeSection.city.timezone}
            />
          )}

        {activeSection.type === "hourly" &&
          activeSection.forecast &&
          activeSection.forecast.hourly && (
            <HourlyForecast
              hourly={activeSection.forecast.hourly}
              timezone={activeSection.city.timezone}
            />
          )}
      </Container>
    </section>
  );
};

export default WeatherSearch;