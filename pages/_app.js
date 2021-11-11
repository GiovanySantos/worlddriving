import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ContinentsProvider } from "../contexts/ContinentsContext";

import "./global.css";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Baloo 2", cursive;
    color: #f5f5f5;
    background: #1f2330;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ContinentsProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ContinentsProvider>
    </>
  );
}
