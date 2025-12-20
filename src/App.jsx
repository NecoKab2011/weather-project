import "./App.css";
import Header from "../src/components/Header/Header";
import Hero from "./components/Hero/Hero";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Footer from "./components/Footer/Footer";
import Interaction from "./components/Interaction/Interaction.jsx";
import { WeatherProvider } from "./components/context/WeatherContext.jsx";

function App() {
  return (
    <>
      <WeatherProvider>
        <Header />
        <Hero />
        <WeatherSearch />
        <Interaction />
        <Slider />
        <Footer />
      </WeatherProvider>
    </>
  );
}

export default App;
