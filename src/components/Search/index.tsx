import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "./styled";

export function Search() {
  return (
    <Container>
      <input type="text" placeholder="Insira o nome da cidade" />
      <MagnifyingGlass size={24} color="#000" className="icon" />
    </Container>
  );
}
