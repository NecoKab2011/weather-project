import { Container } from "../Container/Container";
import { CityCard } from "./CityCard/CityCard";
import { useState, useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { useWeather } from "../hooks/useWeather";

import styles from "./WeatherSearch.module.scss";

const WeatherSearch = () => {
  const { localRecents, refreshAllRecents } = useWeatherContext();
  const { refreshCity, removeCity } = useWeather();

  const [activeSection, setActiveSection] = useState({
    city: null,
    type: null,
  });

  const items = localRecents ?? [];

  const toggleSection = (city, type) => {
    setActiveSection((prev) =>
      prev.city?.id === city.id && prev.type === type
        ? { city: null, type: null }
        : { city, type }
    );
  };

  useEffect(() => {
    if (items.length) refreshAllRecents();
  }, [items, refreshAllRecents]);

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
      </Container>
    </section>
  );
};

export default WeatherSearch;
