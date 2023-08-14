import { useState, useEffect } from "react";
import { getApi } from "../../service/api";
import { Container } from "./styled";

interface CapitalsProps {
  title: string;
}

interface WeatherData {
  id: string;
  temperatureMin: number;
  temperatureMax: number;
  city: string;
}

export function Capitals({ title }: CapitalsProps) {
  const [data, setData] = useState<WeatherData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getApi();
        setData(response.data); // Atualiza o estado com os dados da API
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
        {data.map((item: WeatherData, index: number) => (
          <>
            <div className="degrees" key={index}>
              <span>Min</span>
              <span>{item.temperatureMin}°</span>
            </div>
            <div className="degrees">
              <span>Max</span>
              <span>{item.temperatureMax}°</span>
            </div>

            <div className="spaceCity">
              <span>{item.city}</span>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}
