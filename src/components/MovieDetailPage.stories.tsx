import React from "react";
import { Story, Meta } from "@storybook/react";
import {PureMovieDetailPage,  PureProps } from "./MovieDetailPage";

export default {
  title: "MovieDetailPage",
  component: PureMovieDetailPage,
} as Meta;

const Template: Story<PureProps> = (args) => <PureMovieDetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    id: 603,
    title: "The Matrix",
    releaseDate: "1999-03-30",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  },
};
