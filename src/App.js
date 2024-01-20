import "./App.css";
import SignIn from "./Components/SignIn";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Theme from "./Components/Theme";

export const darkTheme = {
  bg: "#181818",
  bgLighter: "#202020",
  text: "white",
  textSoft: "#aaaaaa",
  soft: "#373737",
};
export const lightTheme = {
  bg: "#f9f9f9",
  bgLighter: "white",
  text: "black",
  textSoft: "#606060",
  soft: "#f5f5f5",
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Theme darkMode={darkMode} setDarkMode={setDarkMode} />
        <SignIn />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  justify-content: center;
  align-items: center;
`;