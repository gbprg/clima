import { useState } from "react";
import { Capitals } from "../components/Capitals";
import { Search } from "../components/Search";
import { Container } from "./styled";
import { Modal } from "../components/Modal";
import { CityWeatherData, getCityWeather } from "../service/api";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityWeather, setCityWeather] = useState<CityWeatherData | null>(null); // Estado para armazenar os dados da cidade
  async function handleOpenModal(cityName: string) {
    setIsModalOpen(true);
    setSelectedCity(cityName);

    try {
      const data = await getCityWeather(cityName);
      setCityWeather(data); // Atualizar o estado com os dados da API
    } catch (error) {
      console.error("Erro na chamada da API:", error);
    }
  }
  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedCity("");
    setCityWeather(null); // Limpar os dados da cidade quando o modal for fechado
  }
  return (
    <Container>
      <p>Previsão do tempo</p>
      <Search onSearch={handleOpenModal} />

      <br />
      <br />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cityName={selectedCity}
        avgTemperature={cityWeather?.main.temp || 0}
        minTemperature={cityWeather?.main.temp_min || 0}
        maxTemperature={cityWeather?.main.temp_max || 0}
        feelsLike={cityWeather?.main.feelsLike || 0}
        windSpeed={cityWeather?.main.windSpeed || 0}
        humidity={cityWeather?.main.humidity || 0}
        nextDaysTemperatures={cityWeather?.main.nextDaysTemperatures || []}
      />
      <hr />
      <br />

      <Capitals title="Capitais" />
    </Container>
  );
}
