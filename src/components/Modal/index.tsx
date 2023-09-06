import * as Dialog from "@radix-ui/react-dialog";
import { Container, SpaceTemp } from "./styled";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityName: string;
  avgTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
}

export function Modal({
  isOpen,
  onClose,
  cityName,
  avgTemperature,
  minTemperature,
  maxTemperature,
  humidity,
}: ModalProps) {
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
                </SpaceTemp>
                <SpaceTemp>
                  <p>Humidade {humidity.toFixed()}%</p>
                </SpaceTemp>
              </Dialog.Content>
            </Container>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
