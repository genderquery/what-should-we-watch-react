import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  makeStyles,
  createStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import NotFoundPage from "./NotFoundPage";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
);

export interface MovieDetail {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
}

export interface PureProps {
  movie: MovieDetail;
}

export const PureMovieDetailPage: React.FunctionComponent<PureProps> = (
  props
) => {
  const classes = useStyles(props);
  const {
    movie: { title, overview },
  } = props;
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h4">
        {title}
      </Typography>
      <Typography component="p" variant="body1">
        {overview}
      </Typography>
    </div>
  );
};

export interface RouteParams {
  movieId: number;
}

export interface Props extends RouteComponentProps<RouteParams> {}

export const MovieDetailQuery = gql`
  query MovieDetail($id: ID!) {
    movie(id: $id) {
      id
      title
      releaseDate
      overview
    }
  }
`;

interface MovieDetailQueryData {
  movie: MovieDetail
}

interface MovieDetailQueryVariables {
  id: number
}

export const MovieDetailPage: React.FunctionComponent<Props> = (props) => {
  const { movieId } = props;
  const { data, loading, error } = useQuery<MovieDetailQueryData, MovieDetailQueryVariables>(MovieDetailQuery, {
    variables: {
      id: movieId!,
    },
  });
  if (loading) return <CircularProgress variant="indeterminate" aria-busy={true} />;
  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>{error.name}</AlertTitle>
        {error.message}
      </Alert>
    );
  if (!data) return <NotFoundPage />
  return <PureMovieDetailPage movie={data?.movie} />;
};

export default MovieDetailPage;
