import { useWeatherContext } from "../context/WeatherContext";
import { weatherAPI } from "../../api/weather";

export const useWeather = () => {
  const { localRecents, setLocalRecents } = useWeatherContext();

  const addCity = async (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    try {
      const city = await weatherAPI.getCurrent(trimmedName);

      if (!localRecents.some((c) => c.id === city.id)) {
        setLocalRecents((prev) => [city, ...prev.filter((c) => c.id !== city.id)].slice(0, 10));
      }

      return city;
    } catch (err) {
      throw new Error(err.message || "City not found");
    }
  };

  const refreshCity = async (city) => {
    try {
      const freshData = await weatherAPI.getCurrentWithFreshTime(city.name);
      setLocalRecents((prev) => prev.map((c) => (c.id === city.id ? freshData : c)));
    } catch {
      console.warn(`Failed to refresh city: ${city.name}`);
    }
  };

  const removeCity = (id) => setLocalRecents((prev) => prev.filter((c) => c.id !== id));

  return { addCity, refreshCity, removeCity };
};

