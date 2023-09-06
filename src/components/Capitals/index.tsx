import { useState, useEffect } from "react";
import { Container } from "./styled";
import { getCityWeather } from "../../service/api";

interface CityData {
  id: string;
  name: string;
  temp_max: number;
}

interface CapitalsProps {
  title: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // Crie uma cópia da lista para não modificar a original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troca os elementos aleatoriamente
  }
  return shuffledArray;
}

const cities = [
  "Belém",
  "Boa Vista",
  "Macapá",
  "Manaus",
  "Palmas",
  "Porto Velho",
  "Rio Branco",
  "Aracaju",
  "Fortaleza",
  "Joao Pessoa",
  "Maceió",
  "Recife",
  "Salvador",
  "São Luis",
  "Teresina",
  "Brasília",
  "Campo Grande",
  "Cuiabá",
  "Goiania",
  "Belo Horizonte",
  "Rio de Janeiro",
  "São Paulo",
  "Vitória",
  "Curitiba",
  "Florianópolis",
  "Porto Alegre",
];

export function Capitals({ title }: CapitalsProps) {
  const [data, setData] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const shuffledCities = shuffleArray(cities);
        const responses = await Promise.all(
          shuffledCities.map(async cityName => {
            const cityWeatherData = await getCityWeather(cityName);
            return {
              id: cityName,
              name: cityName,
              temp_max: cityWeatherData.main.temp_max,
            };
          }),
        );

        setData(responses);
        setLoading(false); // Marca o carregamento como concluído.
      } catch (error) {
        console.error("Erro na chamada da API:", error);
        setError("Ocorreu um erro ao buscar os dados da previsão.");
        setLoading(false); // Marca o carregamento como concluído, mesmo em caso de erro.
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <div className="title">{title}</div>

      <div className="content">
        {loading ? (
          <div>Carregando...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          data.map(city => (
            <div key={city.id} className="degreesSpace">
              <div className="degrees">
                <span>Max</span>
                <span>{city.temp_max.toFixed(0)}°</span>
              </div>

              <div className="spaceCity">
                <span>{city.name}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
