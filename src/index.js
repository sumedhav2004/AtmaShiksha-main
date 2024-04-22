import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./components/Theme";
import UserProvider from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </UserProvider>
  </BrowserRouter>
);
