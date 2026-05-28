import SearchBox from "./SearchBox";
import "./index.css";
import InfoBox from "./InfoBox";
import { useState, useCallback } from "react";

type WeatherInfo = {
  city: string;
  temp: number;
  humidity: number;
  weather: string;
  feelsLike: number;
};

const App = () => {
  const [weather, setWeather] = useState<WeatherInfo>({
    city: "Delhi",
    temp: 25,
    humidity: 10,
    weather: "Sunny",
    feelsLike: 42,
  });

  const updateInfo = useCallback((result: WeatherInfo) => {
    setWeather(result);
  }, []);

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center gap-8 bg-cover'
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/13718295/pexels-photo-13718295.jpeg')",
      }}
    >
      <SearchBox UpdateInfo={updateInfo} />
      <InfoBox info={weather} />
    </div>
  );
};

export default App;
