import React from "react";
import { RouteComponentProps } from "@reach/router";

export interface Props extends RouteComponentProps {}

const NotFoundPage: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
};

export default NotFoundPage;
