import * as Dialog from "@radix-ui/react-dialog";
import { Container, SpaceTemp } from "./styled";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityName: string;
  avgTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  feelsLike: number;
  windSpeed: number;
  humidity: number;
  nextDaysTemperatures: number[];
}

export function Modal({
  isOpen,
  onClose,
  cityName,
  avgTemperature,
  minTemperature,
  maxTemperature,
  feelsLike,
  windSpeed,
  humidity,
  nextDaysTemperatures,
}: ModalProps) {
  useEffect(() => {
    console.log(nextDaysTemperatures);
  }, []);

  return (
    <>
      <Dialog.Root open={isOpen}>
        <Dialog.Trigger asChild />
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay">
            <Container>
              <Dialog.Content className="DialogContent">
                <div className="title">
                  <span>{cityName} - Brasil</span>
                  <p className="button" onClick={onClose}>
                    X
                  </p>
                </div>

                <div className="tempCenter">
                  <h1>{avgTemperature.toFixed()}°C</h1>
                </div>
                <SpaceTemp>
                  <p>
                    <ArrowDown size={24} color="#fc8803" />
                    {minTemperature.toFixed()}°
                  </p>
                  <p>
                    <ArrowUp size={24} color="#fc8803" />
                    {maxTemperature.toFixed()}°
                  </p>

                  <p>Sensação {feelsLike}°C</p>
                </SpaceTemp>
                <SpaceTemp>
                  <p>Vento {windSpeed.toFixed()} km/h</p>

                  <p>Humidade {humidity.toFixed()}%</p>
                </SpaceTemp>
                <div>
                  {nextDaysTemperatures.map((temperature, index) => (
                    <div key={index}>{temperature}°C</div>
                  ))}
                </div>
              </Dialog.Content>
            </Container>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
