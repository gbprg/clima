import axios from "axios";

export interface CityWeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    cityName: string;
    uf: string;
    avgTemperature: number;
    minTemperature: number;
    maxTemperature: number;
    feelsLike: number;
    windSpeed: number;
    humidity: number;
    nextDaysTemperatures: number[];
  };
}

export async function getCityWeather(
  cityName: string,
): Promise<CityWeatherData> {
  const apiKey = "cd809ec3385562f6a222d02d699927bb";
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`,
  );
  return response.data;
}
