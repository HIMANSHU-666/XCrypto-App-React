import React from "react";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme} >
      {/* <ColorModeSwitcher> */}
        <App />
      {/* </ColorModeSwitcher> */}
    </ChakraBaseProvider>
  </React.StrictMode>
);

export const server = "https://api.coingecko.com/api/v3";
