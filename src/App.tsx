import React from "react";
import { Router } from "@reach/router";
import NotFoundPage from "./components/NotFoundPage";
import WelcomePage from "./components/WelcomePage";
import MovieDetailPage from "./components/MovieDetailPage";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NotFoundPage default />
        <WelcomePage path="/" />
        <MovieDetailPage path="/movies/:movieId" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
