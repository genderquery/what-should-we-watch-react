import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import MovieDetailPage, { MovieDetailQuery } from "./MovieDetailPage";

const mockMovie = {
  id: 603,
  title: "The Matrix",
  releaseDate: "1999-03-30",
  overview:
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
};

afterEach(cleanup);

test("renders without error", async () => {
  const mocks = [
    {
      request: { query: MovieDetailQuery, variables: { id: 603 } },
      result: { data: { movie: mockMovie } },
    },
  ];

  const { findAllByText, getByRole } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MovieDetailPage movieId={603} />
    </MockedProvider>
  );

  // The loading indictor will be rendered immediately, but we have to wait for
  // the result to be rendered. get* queries return immediately and find*
  // queries return a promise that resolves after a match is found or after a
  // timeout.

  // Check for loading indicator.
  expect(getByRole("progressbar")).toBeInTheDocument();

  const matches = await findAllByText(/the matrix/i);
  expect(matches.length).toBeGreaterThan(0);
  expect(matches[0]).toBeInTheDocument();
});
