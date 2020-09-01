import React from "react";
import { RouteComponentProps } from "@reach/router";

export interface Props extends RouteComponentProps {}

const WelcomePage: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default WelcomePage;
