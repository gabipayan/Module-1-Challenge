import { Button, DangerButton } from "./components/Button";
import styled from "styled-components";
import GlobalStyle from "./utils/styles/GlobalStyle";
import { Input } from "./components/Input";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

function App() {
  return (
    <>
      <h1>Hola Mundo!</h1>
      {/* <Button>Click me!</Button>
      <Button $primary>Primary</Button>
       */}
      <Title className="text">Hello World!</Title>
      <Button size="sm">Small Button</Button>
      <Button>Default Button</Button>
      <Button type="cancel">Cancel Button</Button>
      <DangerButton>Danger 🔥</DangerButton>
      <Input
        placeholder="Enter your text"
        elevation="1"
        focusElevation="2"
        padding="10px 15px"
        borderRadius="10px"
        width="300px"
        height="40px"
        backgroundColor="#FFF"
      />
      <GlobalStyle />
    </>
  );
}

export default App;
