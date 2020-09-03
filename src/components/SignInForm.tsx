import React, { useState, FormEventHandler } from "react";
import { RouteComponentProps } from "@reach/router";
import {
  makeStyles,
  createStyles,
  TextField,
  Button,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      marginTop: theme.spacing(4),
    },
  })
);

export type SignInHandler = (
  username: string,
  password: string
) => Promise<void>;

export interface Props extends RouteComponentProps {
  onSignIn: SignInHandler;
}

const SignInForm: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);
  const { onSignIn } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await onSignIn(username, password);
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        margin="normal"
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        Sign in
      </Button>
    </form>
  );
};

export default SignInForm;
