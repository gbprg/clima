import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "./styled";

interface SearchProps {
  onSearch: (cityName: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Insira o nome da cidade"
        onKeyPress={event => {
          if (event.key === "Enter") {
            onSearch(event.currentTarget.value);
          }
        }}
      />
      <MagnifyingGlass size={24} color="#000" className="icon" />
    </Container>
  );
}
