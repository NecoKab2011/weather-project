import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();
const API_KEY = "0439257ddcafa13535e8fbef748608c7";

export const WeatherProvider = ({ children }) => {
  const [localRecents, setLocalRecents] = useState(() => {
    try {
      const saved = localStorage.getItem("recents");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("recents", JSON.stringify(localRecents));
  }, [localRecents]);

  const updateSingleCity = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`
      );
      const data = res.data;
      const now = Math.floor(Date.now() / 1000);

      const updatedCity = {
        id: data.id,
        name: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        weather: data.weather[0].main,
        icon: data.weather[0].icon,
        dt: now,
        timezone: data.timezone,
        coord: { lat: data.coord.lat, lon: data.coord.lon },
      };

      const updated = localRecents.map((c) =>
        c.name.toLowerCase() === city.name.toLowerCase() ? updatedCity : c
      );

      setLocalRecents(updated);
    } catch (err) {
      console.log("Error refreshing city:", err);
    }
  };

  const updateAllRecents = async () => {
    if (!localRecents || localRecents.length === 0) return;
    let hasChanges = false;
    const updatedCities = await Promise.all(
      localRecents.map(async (city) => {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`
          );
          const data = res.data;

          const newCityData = {
            id: data.id,
            name: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            weather: data.weather[0].main,
            icon: data.weather[0].icon,
            dt: Math.floor(Date.now() / 1000),
            timezone: data.timezone,
            coord: { lat: data.coord.lat, lon: data.coord.lon },
          };

          if (JSON.stringify(newCityData) !== JSON.stringify(city)) {
            hasChanges = true;
          }
          return newCityData;
        } catch (err) {
          console.log(`Не вдалося оновити ${city.name}`);
          return city;
        }
      })
    );

    if (hasChanges) {
      setLocalRecents(updatedCities);
    }
  };

  const addToRecents = (weatherData) => {
    const cityData = {
      id: weatherData.id,
      name: weatherData.name,
      country: weatherData.sys?.country,
      temp: weatherData.main.temp,
      weather: weatherData.weather[0].main,
      icon: weatherData.weather[0].icon,
      dt: weatherData.dt,
      timezone: weatherData.timezone,
    };

    setLocalRecents((prev) => [cityData, ...prev]);
  };

  const removeFromRecents = (id) => {
    setLocalRecents((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <WeatherContext.Provider
      value={{
        localRecents,
        setLocalRecents,
        addToRecents,
        removeFromRecents,
        refreshSingleCity: updateSingleCity,
        refreshAllRecents: updateAllRecents,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
