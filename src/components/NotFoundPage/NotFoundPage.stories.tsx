import React from "react";
import { Story, Meta } from "@storybook/react";
import NotFoundPage, { Props } from "./NotFoundPage";

export default {
  title: "NotFoundPage",
  component: NotFoundPage,
} as Meta;

const Template: Story<Props> = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
