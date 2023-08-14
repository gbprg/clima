import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL:
    "api.openweathermap.org/data/2. 5/weather?q=London,uk&APPID= 402d2ac367dd4c7341786a657f7899 cf",
});

interface WeatherData {
  id: string;
  temperatureMin: number;
  temperatureMax: number;
  city: string;
}

async function getApi(): Promise<AxiosResponse<WeatherData[]>> {
  try {
    const response = await instance.get("");
    return response;
  } catch (error) {
    throw error;
  }
}

export { getApi };
