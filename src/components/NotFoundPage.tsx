import React from "react";
import { RouteComponentProps } from "@reach/router";
import { makeStyles, createStyles, Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
);

export interface Props extends RouteComponentProps {}

const NotFoundPage: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Alert severity="error">Not found</Alert>
    </Container>
  );
};

export default NotFoundPage;
