import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const apiKey = import.meta.env.API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

type WeatherInfo = {
  city: string;
  temp: number;
  humidity: number;
  weather: string;
  feelsLike: number;
};

type SearchBoxProps = {
  UpdateInfo: (info: WeatherInfo) => void;
};

const SearchBox = ({ UpdateInfo }: SearchBoxProps) => {
  const [city, setCity] = useState<string>("");

  const getWeather = async (): Promise<WeatherInfo> => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${apiKey}&units=metric`,
    );

    if (!response.ok) {
      throw new Error(`City "${city}" not found. Please check the name.`);
    }

    const jsonResponse = await response.json();

    return {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
      feelsLike: jsonResponse.main.feels_like,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!UpdateInfo) return; // safety guard

    try {
      const info = await getWeather();
      UpdateInfo(info);
      setCity("");
    } catch (err) {
      alert(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  };

  return (
    <div>
      <form className='text-center' onSubmit={handleSubmit}>
        <TextField
          label='City Name'
          variant='outlined'
          required
          value={city}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "24px",
              width: "25rem",
              backgroundColor: "white",
            },
          }}
        />
        <br />
        <Button
          variant='contained'
          type='submit'
          sx={{
            margin: "1rem 0",
            borderRadius: "20px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
