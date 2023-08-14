import { Capitals } from "../components/Capitals";
import { Search } from "../components/Search";
import { Container } from "./styled";

export function App() {
  return (
    <Container>
      <p>Previsão do tempo</p>
      <Search />
      <br />
      <br />
      <hr />
      <br />

      <Capitals title="Capitais" />
    </Container>
  );
}
