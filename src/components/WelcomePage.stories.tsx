import React from "react";
import { Story, Meta } from "@storybook/react";
import WelcomePage, { Props } from "./WelcomePage";

export default {
  title: "WelcomePage",
  component: WelcomePage,
} as Meta;

const Template: Story<Props> = (args) => <WelcomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
