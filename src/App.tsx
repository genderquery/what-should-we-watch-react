import React from "react";
import { Router } from "@reach/router";
import NotFoundPage from "./components/NotFoundPage";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
      <NotFoundPage default />
      <WelcomePage path="/" />
    </Router>
  );
}

export default App;
