import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import Login from "./pages/Login/Login";

import { Router } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
