import axios from "axios";

export interface CityWeatherData {
  main: {
    temp: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

export async function getCityWeather(
  cityName: string,
): Promise<CityWeatherData> {
  const apiKey = "cd809ec3385562f6a222d02d699927bb";
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=pt_br`,
  );
  return response.data;
}
