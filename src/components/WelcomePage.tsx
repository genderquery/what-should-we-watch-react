import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  makeStyles,
  createStyles,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
  })
);

export interface Props extends RouteComponentProps {}

const WelcomePage: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography component="h1" variant="h3">
        What should we watch?
      </Typography>
    </Container>
  );
};

export default WelcomePage;
