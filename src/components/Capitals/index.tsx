import { useState, useEffect } from "react";
import { Container } from "./styled";
import { getCityWeather } from "../../service/api"; // Certifique-se do caminho correto

interface CityData {
  id: string;
  name: string;
  temp_min: number;
  temp_max: number;
}

interface CapitalsProps {
  title: string;
}

const cities = [
  { name: "Sao Paulo" },
  { name: "Brasilia" },
  { name: "Salvador" },
  { name: "Rio de Janeiro" },
  { name: "Fortaleza" },
];

export function Capitals({ title }: CapitalsProps) {
  const [data, setData] = useState<CityData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responses = await Promise.all(
          cities.map(async city => {
            const cityWeatherData = await getCityWeather(city.name);
            return {
              id: city.name,
              name: city.name,
              temp_min: cityWeatherData.main.temp_min,
              temp_max: cityWeatherData.main.temp_max,
            };
          }),
        );

        setData(responses);
      } catch (error) {
        console.error("Erro na chamada da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <div className="title">{title}</div>

      <div className="content">
        {data.map(city => (
          <div key={city.id} className="degreesSpace">
            <div className="degrees">
              <span>Min</span>
              <span>{city.temp_min.toFixed(0)}°</span>
            </div>

            <div className="degrees">
              <span>Max</span>
              <span>{city.temp_max.toFixed(0)}°</span>
            </div>

            <div className="spaceCity">
              <span>{city.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
